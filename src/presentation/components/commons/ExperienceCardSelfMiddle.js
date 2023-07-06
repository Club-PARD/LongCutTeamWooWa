import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 184px;
  height: 118px;
  height: auto;
  background-color: ${(props) => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 11px;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  padding: 1px 8px;
  border-radius: 150px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 5px;
  margin-bottom: 0px;
`;

const LineTag = styled.div`
  width: 25px;
  height: 2px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  margin-top: 3px;
  margin-right: 1px;
  margin-bottom: 5px;
`;

const TitleText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  margin-top: 11px;
  margin-bottom: 5px;

  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SummaryText = styled.p`
  margin-top: 3px;
  text-align: start;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  color: ${(props) => props.theme.color.blackHigh};
  line-height: 160%;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 100%;
`;

function ExperienceCardSelfMiddle({ data }) {
  const tags = data["selected-tags"];
  return (
    <CardBox>
      <div>
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
              <LineTag backgroundColor={tag["color"]} />
            ))}
          </div>
        )}
        {data["summary"] && <SummaryText>{data["summary"]}</SummaryText>}
      </div>
    </CardBox>
  );
}

export default ExperienceCardSelfMiddle;
