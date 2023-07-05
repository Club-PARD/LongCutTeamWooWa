import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 184px;
  height: 225px;
  background-color: ${(props) => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 11px;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color.surface};
    transform: rotate(45deg);
    ${(props) => (props.isAbove ? "bottom: -10px;" : "top: -10px;")}
    left: 50%;
    margin-left: -10px;
  }
`;

// const SpeechBubbleBottom = styled.div`
//   position: absolute;
//   width: 20px;
//   height: 15px;
//   background-color: ${(props) => props.theme.color.surface};
//   transform: rotate(45deg);
//   ${(props) => (props.isAbove ? "bottom: -5px;" : "top: -5px;")}
//   left: 50%;
//   margin-left: -10px;
// `;

const Tag = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex; /* 변경된 부분 */
  padding: 2px 8px;
  border-radius: 150px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 5px;
`;
const LineTag = styled.div`
  width: 25px;
  height: 2px;
  background-color: ${(props) => props.backgroundColor};
  display: flex; /* 변경된 부분 */
  justify-content: center;
  margin-top: 0px;
  margin-right: 1px;
  margin-bottom: 5px;
`;

const TitleText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const SummaryText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  color: ${(props) => props.theme.color.blackHigh};
  line-height: 160%;

  height: 100%;
  max-height: 100%;

  overflow: hidden;
  text-overflow: ellipsis;

  margin-top: 0px;
  margin-bottom: 0px;
`;

const ImgBox = styled.div`
  width: 90%;
  height: 0;
  padding-bottom: 50%;
  position: absolute;
  top: 55%;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ExperienceCardSelf({ data, isAbove }) {
  const imgSource = data["imageURL"];
  const tags = data["selected-tags"];
  return (
    <CardBox isAbove={isAbove}>
      {tags && (
        <div style={{ display: "flex", overflow: "clip" }}>
          {tags.map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>
      )}
      <TitleText>{data["title"]}</TitleText>
      {data["tag-is"] !== null && tags && (
        <div style={{ display: "flex" }}>
          {tags.map((tag) => (
            <LineTag backgroundColor={tag["color"]}></LineTag>
          ))}
        </div>
      )}
      <SummaryText>{data["summary"]}</SummaryText>
      {imgSource && (
        <ImgBox>
          <Img src={imgSource} alt="이미지" />
        </ImgBox>
      )}
    </CardBox>
  );
}

export default ExperienceCardSelf;
