import React from "react";
import styled from "styled-components";
import BigLogo from "../../../assets/img/LogoBig_Disquiet.svg";

const CardBox = styled.div`
  width: 184px;
  height: auto;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  padding-top: 14px;
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
  width: 138px;
  height: auto;
  margin-top: 15px;
  margin-bottom: 0;
`;

const SummaryText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  color: ${props => props.theme.color.blackHigh};
  margin-top: 8px;
  line-height: 160%;
  
`;

const BigLogoContainer = styled.img`
  width: 58px;
  height: 11px;
  margin-bottom : 0px; 
  margin-top : 2px;
`;

function ExperienceCardLinkMiddle({ data }) {
  const tags = data["selected-tags"];
  return (
    <CardBox>
      {data["tag-is"] === null ? (
        <BigLogoContainer src={BigLogo} alt="logo img" />
      ) : (tags &&
        <div style={{ display: 'flex' }}>
          {tags.map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>
      )}
      <TitleText>{data["title"]}</TitleText>
      {data["tag-is"] !== null && (tags &&
        <div style={{ display: 'flex' }}>
          {tags.map((tag) => (
            <LineTag backgroundColor={tag["color"]}></LineTag>
          ))}
        </div>
      )}
      <SummaryText>
        {/* {data["summary"].length > 44
          ? `${data["summary"].slice(0, 43)}  ...`
          : data["summary"]} */}
      </SummaryText>
    </CardBox>
  );
}

export default ExperienceCardLinkMiddle;
