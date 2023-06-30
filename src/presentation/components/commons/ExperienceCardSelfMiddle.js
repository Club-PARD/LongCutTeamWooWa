import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  
  height: 118px;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 11px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;

const Tag = styled.div`
  background-color: ${props => props.backgroundColor};
  color: white;
  display: flex;
  padding: 1px 8px;
  border-radius: 150px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 5px;
  maring-bottom : 0px; 
`;

const TitleText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  height: auto;
  margin-top: 11px;
  margin-bottom: 0;
`;

const SummaryText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  color: ${props => props.theme.color.blackHigh};
  margin-top: 3px;
  line-height: 160%;
`;

function ExperienceCardSelfMiddle({ data }) {
  return (
    <CardBox>
      <div>
        <div style={{ display: 'flex', overflow: "clip" }}>
          {data["selected-tags"].map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>
        <TitleText>{data["title"]}</TitleText>
        <SummaryText>
          {/* {data["summary"].length > 40
          ? `${data["summary"].slice(0, 43)}  ...`
          : data["summary"]} */}
        </SummaryText>
      </div>
    </CardBox>
  );
}

export default ExperienceCardSelfMiddle;
