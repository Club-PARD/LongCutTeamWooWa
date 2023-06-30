import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app';

import styled from 'styled-components';
import { ReactComponent as TimelineDot } from '../../../assets/img/timeline_dot.svg';
import postService from '../../../service/firebase/PostService';
import { groupDataByDay, groupDataByMonth, groupDataByWeek, groupDataByYear } from './grouping_functions';
import { useTimelineData, useUpdateTimelineData } from '../../../service/providers/timeline_data_provider';
import CardWrapper from './CardWrapper';

import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";


const TimelineContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 500px;
  position: relative; /* Add relative positioning */
  margin-left: 18px;
  margin-right: 18px;

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
  z-index: -1;
`;
const DotContainer = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-shrink: 0;
  width: ${({ dotWidth }) => dotWidth}px;
  background-color: transparent;
`;

const DotTimeWrapper = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center both vertically and horizontally */
  margin: auto; /* Center the dot horizontally */
`;

const Dot = styled(TimelineDot)`
  width: 50px;
  height: 50px;
  
`;

const Time = styled.div`
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  margin-top: ${({ isAbove }) => (isAbove ? '-60px' : '60px')};

`;

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const TimelineDataBuilder = () => {
  const timelineData = useTimelineData();
  switch(timelineData["grouping"]){
    case "year":
      return timelineData["postGroupByYear"];
    case "month":
      return timelineData["postGroupByMonth"];
    case "week":
      return timelineData["postGroupByWeek"];
    case "day":
      return timelineData["postGroupByDay"];
    default:
      return timelineData["postGroupByDay"];
  }
}

const CardSizeBuilder = (size) => {
  console.log("got: " + size);
  if(size <= 1){
    return lxSize;
  } else if(size <= 2){
    return largeSize;
  } else if(size <= 4){
    return mediumSize;
  } else{
    return smallSize;
  }
}

const Timeline = () => {
  const timelineContainerRef = useRef(null);
  const timelineData = useTimelineData();

  const [dotWidth, setDotWidth] = useState(0);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateDataInput = useUpdateTimelineData();
  const handleTimelineDataChange = (name, value) => {
    updateDataInput(name, value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      
      try{
        const dateStr = '06/09/2023';
        const userId = 'tlsgn';
        const [month, day, year] = dateStr.split('/');
        const givenDate = new Date(year, month - 1, day);
        const collectionRef = firebase.firestore().collection('posts');
        let query = collectionRef
          .where('userId', '==', userId)
          .orderBy('date', 'desc');
        const querySnapshot = await query.get();
        const fetchedPosts = querySnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }));
        handleTimelineDataChange("postGroupByDay", groupDataByDay(fetchedPosts));
        handleTimelineDataChange("postGroupByWeek", groupDataByWeek(fetchedPosts));
        handleTimelineDataChange("postGroupByMonth", groupDataByMonth(fetchedPosts));
        handleTimelineDataChange("postGroupByYear", groupDataByYear(fetchedPosts));
        
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }

      setIsLoading(false);
    };


    fetchPosts();
  }, []);


  useEffect(() => {
    if (!posts || !timelineContainerRef.current) {
      return; // Exit early if posts or timelineContainerRef.current is not available
    }

    const calculateDotWidth = () => {
      const containerWidth = timelineContainerRef.current.getBoundingClientRect().width;
      const dotCount = Math.min(posts.length, 7);
      const calculatedDotWidth = containerWidth / dotCount;
      setDotWidth(calculatedDotWidth);
    };

    calculateDotWidth();
    window.addEventListener('resize', calculateDotWidth);
    return () => {
      window.removeEventListener('resize', calculateDotWidth);
    };
  }, [posts, timelineContainerRef.current]);

  if (isLoading) {
    return <div>loading..</div>; // Render a loading state or return null while the data is being fetched
  }
 const timelinePostData = TimelineDataBuilder();
 const dataLength = Object.keys(timelinePostData).length;
  return (
    <TimelineContainer ref={timelineContainerRef}>
      <HorizontalLines lineWidth={dotWidth * dataLength} />
      { 
        Object.entries(timelinePostData).map((entry, index) =>{
          const cardSize = Object.entries(entry[1]).length;
          console.log(entry[1]);
          return (
            <DotContainer key={entry[1][0].docId} dotWidth={dotWidth} >
              <DotTimeWrapper>
                <Dot />
                <Time isAbove={index % 2 === 0} >
                  {entry[0]}
                </Time>
                <CardWrapper mode={CardSizeBuilder(cardSize)} isAbove={index % 2 !== 0} postDataList={entry[1]}/>
              </DotTimeWrapper>
            </DotContainer>
          )
        } ) 
      }
    </TimelineContainer>
  );
};

export default Timeline;
