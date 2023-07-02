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
  margin-bottom : 0px; 
`;
const LineTag = styled.div`
  width: 25px;
  height: 2px; 
  background-color: ${props => props.backgroundColor};
  display: flex; /* 변경된 부분 */
  justify-content: center;
  margin-top : 3px; 
  margin-right : 1px; 
  margin-bottom: 5px; 
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
  max-width: inherit;
`;

function ExperienceCardSelfMiddle({ data }) {
  const tags = data["selected-tags"];
  return (
    <CardBox>
      <div>
        {tags && <div style={{ display: 'flex', overflow: "clip" }}>
          {tags.map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>}
        <TitleText>{data["title"]}</TitleText>
        {data["tag-is"] !== null && (tags &&
          <div style={{ display: 'flex' }}>
            {tags.map((tag) => (
              <LineTag backgroundColor={tag["color"]}></LineTag>
            ))}
          </div>
        )}
        {data["summary"] && <SummaryText>
          {data["summary"].length > 40
          ? `${data["summary"].slice(0, 43)}  ...`
          : data["summary"]}
        </SummaryText>}
      </div>
    </CardBox>
  );
}

export default ExperienceCardSelfMiddle;
