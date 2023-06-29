import React from "react";
import styled from "styled-components";
import BigLogo from "../../../assets/img/LogoBig_Disquiet.svg";

const CardBox = styled.div`
  width: 184px;
  height: 38px;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  padding-top: 8px;
`;

const Tag = styled.div`
  background-color: ${props => props.backgroundColor};
  color: white;
  display: flex;
  padding: 2px 8px;
  border-radius: 150px;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 5px;
`;

const TitleText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  width: 100%;
  height: auto;
  margin-top: 9px;
  margin-bottom: 0;
`;

const BigLogoContainer = styled.img`
  width: 58px;
  height: 11px;
  margin-bottom : 0px; 
  margin-top : 2px;
`;

function ExperienceCardLinkSmall({ data }) {
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
            <TitleText>
                {data["title"].length > 19
                    ? `${data["title"].slice(0, 18)}   ...`
                    : data["title"]}
            </TitleText>

        </CardBox>
    );
}

export default ExperienceCardLinkSmall;
