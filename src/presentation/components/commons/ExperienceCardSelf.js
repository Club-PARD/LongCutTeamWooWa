import React from "react";
import styled from "styled-components";


const CardBox = styled.div`

  height: auto;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap; /* 변경된 부분 */
  position: relative; /* 추가된 부분 */
`;

const SpeechBubbleBottom = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  background-color: ${props => props.theme.color.surface};
  transform: rotate(45deg);
  bottom: -5px;
  left: 50%;
  margin-left: -10px;
`;

const Tag = styled.div`
  background-color: ${props => props.backgroundColor};
  color : white; 
  display: flex; /* 변경된 부분 */
  padding: 2px 8px;
  border-radius: 150px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  width : fit-content;
  margin-right: 5px; 
`;


const TitleText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  width: 100%;
  height: auto;
  margin-top : 15px ; 
  margin-bottom : 10px; 
  marigin-left : 10px;
  marigin-right : 3px;
`;

const SummaryText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  color: ${props => props.theme.color.blackHigh};
  line-height: 160%;
  
  width: 100%;
  margin-top : 0px ; 
  margin-bottom : 0px; 
`;

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  margin-top : 8px; 
  
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


function ExperienceCardSelf({ data }) {
  const imgSource = data["imgSrc"];
  const tags = data["selected-tags"];
  return (
    <CardBox>
      {tags && <div style={{ display: 'flex', overflow: "clip" }}>
        {tags.map((tag) => (
          <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
        ))}
      </div>}
      <TitleText>{data["title"]}</TitleText>
      <SummaryText>{data["summary"]}</SummaryText>
      {imgSource &&
        <ImgBox>
          <Img src={imgSource} alt="이미지" />
        </ImgBox>
      }
      <SpeechBubbleBottom />
    </CardBox>
  );
}

export default ExperienceCardSelf;


