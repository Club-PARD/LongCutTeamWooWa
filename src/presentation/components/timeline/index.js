import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase/compat/app";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { ReactComponent as TimelineDot } from "../../../assets/img/timeline_dot.svg";
import postService from "../../../service/firebase/PostService";
import {
  groupDataByDay,
  groupDataByMonth,
  groupDataByWeek,
  groupDataByYear,
} from "./grouping_functions";
import {
  useTimelineData,
  useUpdateTimelineData,
} from "../../../service/providers/timeline_data_provider";
import CardWrapper from "./CardWrapper";

import { List } from "immutable";

import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";

import GoToFirstIcon from "../../../assets/img/GoToFirstIcon.svg";
import GotoLastIcon from "../../../assets/img/GotoLastIcon.svg";
import GoToDateIcon from "../../../assets/img/GoToDateIcon.svg";

const TimelineContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100%;
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

const TransparentButton = styled.button`
  position: fixed;
  z-index :5;
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  margin-top: 10px;
`;
const ButtonText = styled.span`
  color: ${(props) => props.theme.color.blackHigh};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-left: 6px;
  margin-right: 6px;
  opacity: 80%;
`;
const FirstButton = styled(TransparentButton)`
  right: 180px;
`;
const LastButton = styled(TransparentButton)`
  right: 67px;
`;
const FirstIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-top: 1px;
  opacity: 80%;
`;
const LastIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-bottom: 0px;
  opacity: 80%;
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

const brightenAnimation = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

const darkenAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Dot = styled(TimelineDot)`
  width: 50px;
  height: 50px;
  animation: ${brightenAnimation} 2s linear infinite,
    ${scaleAnimation} 2s linear infinite;

  &:hover {
    animation: ${darkenAnimation} 2s linear infinite;
  }
`;

const Time = styled.div`
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  margin-top: ${({ isAbove }) => (isAbove ? "-60px" : "60px")};
`;

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const TimelineDataBuilder = () => {
  const timelineData = useTimelineData();
  let targetData;
  switch (timelineData["grouping"]) {
    case "year":
      targetData = timelineData["postGroupByYear"];
      break;
    case "month":
      targetData = timelineData["postGroupByMonth"];
      break;
    case "week":
      targetData = timelineData["postGroupByWeek"];
      break;
    case "day":
      targetData = timelineData["postGroupByDay"];
      break;
    default:
      targetData = timelineData["postGroupByDay"];
      break;
  }
  if (!targetData) return [];

  targetData = Object.entries(targetData);

  if (timelineData["selected-tags"] && timelineData["selected-tags"][0]) {
    const selectedTags = timelineData["selected-tags"];

    const filteredData = targetData.filter((element) => {
      return element[1].some((item) => {
        if (item["selected-tags"]) {
          return selectedTags.every((tag) => {
            return item["selected-tags"].some((itemTag) => {
              return (
                itemTag.tagName === tag.tagName && itemTag.color === tag.color
              );
            });
          });
        }
        return false;
      });
    });
    return filteredData;
  }

  return targetData;
};

const CardSizeBuilder = (size) => {
  if (size <= 1) {
    return lxSize;
  } else if (size <= 2) {
    return largeSize;
  } else if (size <= 4) {
    return mediumSize;
  } else {
    return smallSize;
  }
};

const Timeline = () => {
  const timelineContainerRef = useRef(null);

  const [dotWidth, setDotWidth] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const updateDataInput = useUpdateTimelineData();
  const handleTimelineDataChange = (name, value) => {
    updateDataInput(name, value);
  };

  const timelinePostData = TimelineDataBuilder();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const dateStr = "06/09/2023";
        const userId = "tlsgn";
        const [month, day, year] = dateStr.split("/");
        const givenDate = new Date(year, month - 1, day);
        const collectionRef = firebase.firestore().collection("posts");
        let query = collectionRef
          .where("userId", "==", userId)
          .orderBy("date", "desc");
        const querySnapshot = await query.get();
        const fetchedPosts = querySnapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        handleTimelineDataChange(
          "postGroupByDay",
          groupDataByDay(fetchedPosts)
        );
        handleTimelineDataChange(
          "postGroupByWeek",
          groupDataByWeek(fetchedPosts)
        );
        handleTimelineDataChange(
          "postGroupByMonth",
          groupDataByMonth(fetchedPosts)
        );
        handleTimelineDataChange(
          "postGroupByYear",
          groupDataByYear(fetchedPosts)
        );
      } catch (error) {
        console.error("Error fetching posts:", error);
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!timelinePostData || !timelineContainerRef.current) {
      return; // Exit early if posts or timelineContainerRef.current is not available
    }

    const calculateDotWidth = () => {
      const containerWidth =
        timelineContainerRef.current.getBoundingClientRect().width;
      const dotCount = Math.min(dataLength, 7);
      const calculatedDotWidth = containerWidth / dotCount;
      setDotWidth(calculatedDotWidth);
    };

    calculateDotWidth();
    window.addEventListener("resize", calculateDotWidth);
    return () => {
      window.removeEventListener("resize", calculateDotWidth);
    };
  }, [timelinePostData, timelineContainerRef.current]);

  if (isLoading) {
    return <div>loading..</div>; // Render a loading state or return null while the data is being fetched
  }

  const dataLength = timelinePostData.length;

  const buttonOnClick = (mode) => {
    const timelineContainer = timelineContainerRef.current;
    const targetDate = "06/07/2023"; // Target date to navigate to
    let targetIndex;

    switch (mode) {
      case "end":
        targetIndex = dataLength - 1;
        break;
      case "start":
        targetIndex = 0;
        break;
      case "date":
        targetIndex = timelinePostData.findIndex(
          (item) => item[0] <= targetDate
        );
        console.log(targetIndex);
        break;
      default:
        return; //Do nothing
    }

    // Calculate the position of the target date on the timeline
    const targetPosition = targetIndex * dotWidth;

    // Scroll to the target position on the timeline
    timelineContainer.scrollTo({
      left: targetPosition,
      behavior: "smooth", // Optional, for smooth scrolling effect
    });
  };

  return (
    <>
      <TimelineContainer ref={timelineContainerRef}>
        <FirstButton onClick={() => buttonOnClick("start")}>
          <FirstIcon src={GoToFirstIcon} alt="GoToFirstIcon" />
          <ButtonText>첫 기록</ButtonText>
        </FirstButton>
        <LastButton onClick={() => buttonOnClick("end")}>
          <ButtonText>마지막 기록</ButtonText>
          <LastIcon src={GotoLastIcon} alt="GotoLastIcon" />
        </LastButton>
        {/* <DateButton onClick={() => buttonOnClick('date')}>
          <DateIcon src={GoToDateIcon} alt="GoToDateIcon" />
          <ButtonText>06/07/2023로 이동</ButtonText>
        </DateButton> */}
        <HorizontalLines lineWidth={dotWidth * dataLength} />
        {timelinePostData.map((entry, index) => {
          const cardSize = Object.entries(entry[1]).length;
          return (
            <DotContainer key={entry[1][0].docId} dotWidth={dotWidth}>
              <DotTimeWrapper>
                <Dot />
                <Time isAbove={index % 2 === 0}>{entry[0]}</Time>
                <CardWrapper
                  mode={CardSizeBuilder(cardSize)}
                  isAbove={index % 2 !== 0}
                  postDataList={entry[1]}
                />
              </DotTimeWrapper>
            </DotContainer>
          );
        })}
      </TimelineContainer>
    </>
  );
};

export default Timeline;
