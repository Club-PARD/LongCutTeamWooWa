import React from "react";
import styled from "styled-components";
import BigLogo from "../../../assets/img/LogoBig_Disquiet.svg";
import LogoSmall_Disquiet from "../../../assets/img/Logo_Disquiet.png";


const CardBox = styled.div`
  width: 184px;
  height: auto;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
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
  color: ${props => props.theme.color.blackHigh};
  width: 146px;
  height: auto;
  margin-top : 15px ; 
  margin-bottom : 10px; 
`;

const SummaryText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  color: ${props => props.theme.color.blackHigh};
  margin-top : 0;
  line-height: 160%;
`;

const LogoBox = styled.div`
  width: 42px;
  height: 42px;
  margin-left: auto;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margina-top : 26px; 
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;


const BigLogoContainer = styled.img`
  width: 58px;
  height: 11px;
  margin-bottom : 5px; 
`;

function getWebsiteLog( websiteName ) {
  if (websiteName == null ) {
    console.log("받은 문자열 값이 없습니다.");
    return null;
  }

  switch (websiteName) {
    case "disquiet":
      return LogoSmall_Disquiet;
    default:
      console.log("알 수 없는 문자열 값:", websiteName);
      return null;
  }
}

function ExperienceCardLink({ data }) {
  const websiteName = data["crawled-website"];
  console.log(websiteName);

  return (
    <CardBox> 
      {data["tag-is"] === null ? (
        <BigLogoContainer src={BigLogo} alt="logo img" />
      ) : (
        <div style={{ display: 'flex' }}>
          {data["selected-tags"].map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>
      )}
      <TitleText>{data["title"]}</TitleText>
      <SummaryText>{data["summary"]}</SummaryText>
      <LogoBox>
        <Logo src={getWebsiteLog(websiteName)} alt="이미지" />
      </LogoBox>
      <SpeechBubbleBottom /> {/* 추가된 부분 */}
    </CardBox>
  );
}


export {ExperienceCardLink};


