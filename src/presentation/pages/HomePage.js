import React, { useState } from "react";
import styled from "styled-components";
import CategoryBuilder from "../components/catagory";
import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
import DateRange from "../components/DateRange";
import ExperienceCardLink from "../components/commons/ExperienceCardLink";
import ExperienceCardSelf from "../components/commons/ExperienceCardSelf";
import Timeline from "../components/timeline/index";

const TestBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray; 
  padding : 20px; 
  margin-bottom : 300px; 
`
function HomePage() {

  const tagValue = "태그";
  const titleValue = "경험card - 링크로 기록";
  const summaryValue = "요약 내용입니다. 요약내용입니다. 요약내용입니다. 요약내용입니다 요약내용입니다.요약내용입니다.요약내용입니다.";
  const IMG = "https://assets.disquiet.io/images/product/thumbnail/33a20baaee7cde30da7a06f262c77972c6ae5821c04823ebfa41864b2e3ea4bc";

  return (

    <div>
      <GlobalNavBar />
      {/* <DateRange /> */}
      <div style={{ display: "flex" }}>
        <CategoryBuilder />
        {/* <TestBox>
          <ExperienceCardSelf
            tag={tagValue}
            title={titleValue}
            summary={summaryValue}
            imgSrc={IMG}
          />
        </TestBox> */}
        <div style={{ display: "flex", flexDirection: 'column', width: "100%", overflowX: 'hidden', }}>
          <Header />
          <Timeline />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
