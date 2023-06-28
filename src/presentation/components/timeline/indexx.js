import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';

import styled from 'styled-components';
import { ReactComponent as TimelineDot } from '../../../assets/img/timeline_dot.svg';
import postService from '../../../service/firebase/PostService';

const TimelineContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 500px;
  position: relative; /* Add relative positioning */

  /* Remove scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HorizontalLines = styled.div`
  position: absolute; /* Use absolute positioning */
  top: 50%; /* Position at the vertical center */
  left: 0;
  width: ${({ lineWidth }) => lineWidth}px;
  height: 2px;
  background-color: #ccc;
  transform: translateY(-50%); /* Adjust the vertical alignment */
`;
const DotContainer = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-shrink: 0;
  width: ${({ dotWidth }) => dotWidth}px;
  background-color: transparent;
`;

const DotTimeWrapper = styled.div`


  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center both vertically and horizontally */
  margin: auto; /* Center the dot horizontally */
`;

const Dot = styled(TimelineDot)`
  width: 0px;
  height: 0px;
  transition: width 0.6s ease, height 0.6s ease;

  &.active {
    width: 50px;
    height: 50px;
  }
`;

const Time = styled.div`
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  margin-top: ${({ isAbove }) => (isAbove ? '-60px' : '60px')};

  opacity: 0;
  transition: opacity 0.6s ease;

  &.active {
    opacity: 1;
  }
`;

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const Timeline = () => {
  const [dotWidth, setDotWidth] = useState(0);
  const [activeDots, setActiveDots] = useState([]);
  const dotRefs = useRef([]);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPost, setLastPost] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const collectionRef = firebase.firestore().collection('posts');
      let query = collectionRef.where('userId', '==', 'tlsgn').orderBy('date', 'desc');

      if (lastPost) {
        query = query.startAfter(lastPost);
      }

      const querySnapshot = await query.limit(10).get();

      if (querySnapshot.docs.length === 0) {
        setIsLoading(false);
        return;
      }

      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));

      setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
      setLastPost(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const calculateDotWidth = () => {
      const containerWidth = window.innerWidth;
      const dotCount = Math.min(posts.length, 7);
      const calculatedDotWidth = containerWidth / dotCount;
      setDotWidth(calculatedDotWidth);
    };

    calculateDotWidth();
    window.addEventListener('resize', calculateDotWidth);
    return () => {
      window.removeEventListener('resize', calculateDotWidth);
    };
  }, [posts]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        const dotIndex = dotRefs.current.indexOf(target);

        if (isIntersecting) {
          setActiveDots((prevActiveDots) =>
            prevActiveDots.includes(dotIndex) ? prevActiveDots : [...prevActiveDots, dotIndex]
          );
        } else {
          setActiveDots((prevActiveDots) => prevActiveDots.filter((index) => index !== dotIndex));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    dotRefs.current.forEach((dotRef) => {
      observer.observe(dotRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <TimelineContainer>
      {isLoading && <p>Loading...</p>}
      <HorizontalLines lineWidth={dotWidth * posts.length} />
      {posts.map((post, index) => (
        <DotContainer key={post.id} dotWidth={dotWidth}>
          <DotTimeWrapper>
            <Dot
              ref={(ref) => (dotRefs.current[index] = ref)}
              className={activeDots.includes(index) ? 'active' : ''}
            />
            <Time
              isAbove={index % 2 === 0}
              className={activeDots.includes(index) ? 'active' : ''}
            >
              {formatDate(post.date.toDate())}
            </Time>
          </DotTimeWrapper>
        </DotContainer>
      ))}
      {isLoading && <p>Loading more posts...</p>}
      {!isLoading && lastPost && (
        <button onClick={fetchPosts}>Load More</button>
      )}
    </TimelineContainer>
  );
};

export default Timeline;
