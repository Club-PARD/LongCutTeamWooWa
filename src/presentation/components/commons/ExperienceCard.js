import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tag = styled.div`
  background-color: #f1f1f1;
  display: inline-block; 

  padding: 4px 8px;
  border-radius: 150px;
  font-size: 14px;
  color: #333333;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom : 0; 
`;

const SummaryText = styled.p`
    margin-top : 0;
  font-size: 14px;
  color: #666666;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

function ExperienceCard({ tag, title, summary }) {
    return (
      <CardBox>
        <Tag>{tag}</Tag>
        <TitleText>{title}</TitleText>
        <SummaryText>{summary}</SummaryText>
        <Img src="이미지 주소" alt="이미지" />
      </CardBox>
    );
  }

export default ExperienceCard;
