import React, { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';
import { ReactComponent as TimelineDot } from '../../../assets/img/timeline_dot.svg';

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
`;

const Timeline = ({ snapshots }) => {
  const [dotWidth, setDotWidth] = useState(0);
  const [activeDots, setActiveDots] = useState([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const calculateDotWidth = () => {
      const containerWidth = window.innerWidth;
      const dotCount = Math.min(snapshots.length, 7);
      const calculatedDotWidth = containerWidth / dotCount;
      setDotWidth(calculatedDotWidth);
    };

    calculateDotWidth();
    window.addEventListener('resize', calculateDotWidth);
    return () => {
      window.removeEventListener('resize', calculateDotWidth);
    };
  }, [snapshots]);

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
            prevActiveDots.includes(dotIndex)
              ? prevActiveDots
              : [...prevActiveDots, dotIndex]
          );
        } else {
          setActiveDots((prevActiveDots) =>
            prevActiveDots.filter((index) => index !== dotIndex)
          );
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
  }, [snapshots]);

  return (
    <TimelineContainer>
        <HorizontalLines lineWidth={dotWidth * snapshots.length}/>
      {snapshots.map((snapshot, index) => (
        <DotContainer key={snapshot.id} dotWidth={dotWidth}>
            <DotTimeWrapper>
              <Dot
                ref={(ref) => (dotRefs.current[index] = ref)}
                className={activeDots.includes(index) ? 'active' : ''}
              />
              <Time isAbove={index % 2 === 0}>
                {snapshot.time}
              </Time>
          
          </DotTimeWrapper>
        </DotContainer>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
