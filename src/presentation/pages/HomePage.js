import React, { useState } from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/img/MainBackground.svg";

import CategoryBuilder from "../components/catagory";
import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
import DateRange from "../components/DateRange";
import { ExperienceCardLink } from "../components/commons/ExperienceCardLink";
import ExperienceCardSelf from "../components/commons/ExperienceCardSelf";
import ExperienceCardSelfMiddle from "../components/commons/ExperienceCardSelfMiddle";
import ExperienceCardLinkMiddle from "../components/commons/ExperienceCardLinkMiddle";
import ExperienceCardLinkSmall from "../components/commons/ExperienceCardLinkSmall";
import ExperienceCardSelfSmall from "../components/commons/ExperienceCardSelfSmall";
import Timeline from "../components/timeline/index";
import { TimelineDataProvider } from "../../service/providers/timeline_data_provider";
import { DataInputProvider } from "../../service/providers/data_input_provider";

import ListModal from "../components/postListItem";


const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const TestBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray; 
  margin-bottom : 300px; 
`


const exampleCrawledData = {
  "add-free": null,
  "add-link": null,
  "tag-is": true, // 링크작성 : 테그 유무에 따라 로고 vs 테그 보여지는거 달라짐. -> "코드 추가 완료"
  "img-is": true, // 직접작성일 때, 이미지 유무에 따라 summary 길이 달라져야함. -> "코드 추가 작성필요."
  "summary": "summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. ",
  "crawled-website": "disquiet",
  "date": "06/25/2023",
  "selected-tags": [
    {
      "color": "#8560F6",
      "tagName": "리더십",
    },
    {
      "color": "#ED735D",
      "tagName": "협업",
    },
  ],
  "title": "경험card - 링크로 기록경험card - 링크로 기록경험card",
  "userId": "jshooni",
  "imgSrc": "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg", //직접작성(제일큰거)일 때, img 주소 
}

function HomePage() {

  return (
    <div>
      <BackgroundContainer>
        <Background src={BackgroundImg} />
        <GlobalNavBar />
        {/* <DateRange /> */}
        <TimelineDataProvider>
          <div style={{ display: "flex" }}>
            <CategoryBuilder />
            <div style={{ display: "flex", flexDirection: 'column', width: "100%", overflowX: 'hidden', }}>
              <Header />
              <Timeline />
            </div>
          </div>
        </TimelineDataProvider>
      </BackgroundContainer>
      <TestBox>
        <ExperienceCardSelf data={exampleCrawledData} />
        <ListModal />
      </TestBox>
    </div>
  );
}

export default HomePage;
