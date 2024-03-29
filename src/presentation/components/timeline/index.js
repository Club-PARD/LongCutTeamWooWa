import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase/compat/app";
import { keyframes, css } from "styled-components";
import styled from "styled-components";
import { ReactComponent as TimelineDot } from "../../../assets/img/timeline_dot.svg";
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

import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";
import GoToFirstIcon from "../../../assets/img/GoToFirstIcon.svg";
import GotoLastIcon from "../../../assets/img/GotoLastIcon.svg";
import GoToDateIcon from "../../../assets/img/GoToDateIcon.svg";
import ModalView from "../modal/ModalView";
import { useUser } from "../../../service/providers/auth_provider";
import { useDataInput } from "../../../service/providers/data_input_provider";
import CircularIndicator from "../loadingIndicator/CircularIndicator";

const TimelineContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100%;
  position: relative; /* Add relative positioning */
  /* margin-left: 18px; 디자인 수정사항 */
  margin-right: 18px;
  margin-bottom: 18px;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  /* Remove scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TransparentButton = styled.button`
  position: fixed;
  z-index: 5;
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  margin-top: 10px;
`;
const ButtonText = styled.span`
  color: ${(props) => props.theme.color.primary400};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-left: 6px;
  margin-right: 6px;
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
  width: ${({ size }) => {
    if (size === "day") {
      return "40px";
    } else if (size === "week") {
      return "55px";
    } else if (size === "month") {
      return "70px";
    } else if (size === "year") {
      return "90px";
    }
  }};

  height: ${({ size }) => {
    if (size === "day") {
      return "40px";
    } else if (size === "week") {
      return "55px";
    } else if (size === "month") {
      return "70px";
    } else if (size === "year") {
      return "90px";
    }
  }};

  animation: ${({ size }) => {
    if (
      size === "day" ||
      size === "week" ||
      size === "month" ||
      size === "year"
    ) {
      return css`
        ${brightenAnimation} 2s linear infinite, ${scaleAnimation} 1.5s linear infinite
      `;
    }
  }};

  &:hover {
    animation: ${({ size }) => {
      if (
        size === "day" ||
        size === "week" ||
        size === "month" ||
        size === "year"
      ) {
        return css`
          ${darkenAnimation} 2s linear infinite
        `;
      }
    }};
  }
`;

const Time = styled.div`
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  margin-top: ${({ locate, isAbove }) => {
    let topValue;
    if (locate === "day") {
      topValue = isAbove ? "-60px" : "60px";
    } else if (locate === "week") {
      topValue = isAbove ? "-80px" : "80px";
    } else if (locate === "month") {
      topValue = isAbove ? "-97px" : "97px";
    } else if (locate === "year") {
      topValue = isAbove ? "-117px" : "117px";
    }
    return topValue;
  }};
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

  if (targetData.length === 0) {
    return targetData;
  }

  if (timelineData["selected-tags"] && timelineData["selected-tags"][0]) {
    let selectedTags = timelineData["selected-tags"];
    if (
      timelineData["selected-hashs"] !== undefined &&
      timelineData["selected-hashs"] != null
    ) {
      selectedTags = [...selectedTags, ...timelineData["selected-hashs"]];
    }
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
  } else if (size <= 3) {
    return mediumSize;
  } else {
    return smallSize;
  }
};

const Timeline = ({ rerender, setRerender }) => {
  const [selectedDotData, setSelectedDotData] = useState(null);
  const [isCardCliked, setIsCardCliked] = useState(false);
  const handleDotClick = () => {
    setIsCardCliked(!isCardCliked);
  };
  const user = useUser();
  const dataInput = useDataInput();

  const timelineData = useTimelineData();

  const timelineContainerRef = useRef(null);

  const [isPostDeleted, setIsPostDeleted] = useState(false);

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

        const userId = user.uid;
        const [month, day, year] = dateStr.split("/");
        const givenDate = new Date(year, month - 1, day);
        const collectionRef = firebase.firestore().collection("posts");
        let query = collectionRef
          .where("userId", "==", userId)
          .orderBy("date", "asc");
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
    setIsPostDeleted(false);
    setRerender(false);
  }, [isPostDeleted, rerender]);

  const handlePostDelete = () => {
    setIsPostDeleted(true);
  };

  const buttonOnClick = (mode) => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer === null) return;
    const targetDate = dataInput["date-navigate"]; // Target date to navigate to
    console.log("got data: ", targetDate, mode);
    let targetIndex;

    switch (mode) {
      case "end":
        targetIndex = dataLength - 1;
        break;
      case "start":
        targetIndex = 0;
        break;
      case "date":
        if (targetDate === null) return;
        targetIndex = timelinePostData.findIndex((item) => {
          return item[0] >= targetDate;
        });
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

  useEffect(() => {
    buttonOnClick(dataInput["date-navigate"] !== null ? "date" : "start");
  }, [dataInput["date-navigate"]]);

  if (isLoading) {
    return <div>loading..</div>; // Render a loading state or return null while the data is being fetched
  }

  const dataLength = timelinePostData.length;

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
        <HorizontalLines lineWidth={dotWidth * dataLength} />
        {timelinePostData.length === 0 ? (
          <CircularIndicator message={'글을 추가해주세요'}/>
        ) : (
          <></>
        )}
        {timelinePostData.map((entry, index) => {
          const cardSize = Object.entries(entry[1]).length;
          return (
            <DotContainer key={entry[1][0].docId} dotWidth={dotWidth}>
              <DotTimeWrapper>
                <Dot size={timelineData["grouping"]} />

                <Time
                  locate={timelineData["grouping"]}
                  isAbove={index % 2 === 0}
                >
                  {entry[0]}
                </Time>
                <CardWrapper
                  setPostData={setSelectedDotData}
                  handleDotClick={handleDotClick}
                  mode={CardSizeBuilder(cardSize)}
                  isAbove={index % 2 !== 0}
                  postDataList={entry[1]}
                />
              </DotTimeWrapper>
            </DotContainer>
          );
        })}
      </TimelineContainer>
      {isCardCliked && (
        <ModalView
          postDotData={selectedDotData}
          handleDotClick={handleDotClick}
          onDelete={() => setIsPostDeleted(true)}
        />
      )}
    </>
  );
};

export default Timeline;
