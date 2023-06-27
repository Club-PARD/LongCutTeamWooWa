import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImage from "../../../assets/img/LogoImg.svg";
import UserProfile from "../../../assets/img/UserProfileExample.svg";

const GlobalContainer = styled.div`
  background-color: ${props => props.theme.color.blackHigh};
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LogoText = styled.div`
  font-family: Mont;
  font-weight: ${props => props.theme.fontWeights.heavy};
  font-size: 20px;
  color: #F8F5F0;
`;

const SearchExperience = styled.input`
  margin-right: 16px;
  margin-left: 25px;
  padding: 8px;
  border-radius: 40px;
  flex-shrink: 0;
  
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  padding-right: 80px; 
`;

const TimelineButton = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  color: #F8F5F0;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-family: ${props => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #343434;
  }
`;

const ListButton = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  color: #F8F5F0;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-family: ${props => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #343434;
  }
`;

const AddLinkButton = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${props => props.theme.color.primary50};
  color: ${props => props.theme.color.primary400};
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-family: ${props => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.primary300};
    color: ${props => props.theme.color.onPrimary};
  }
`;

const AddExperience = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${props => props.theme.color.primary50};
  color: ${props => props.theme.color.primary400};
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-family: ${props => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.primary300};
    color: ${props => props.theme.color.onPrimary};
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const ProfileName = styled.div`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  color: ${props => props.theme.color.surface};
`;

const GlobalNavBar = () => {
  return (
    <GlobalContainer>
      <Logo>
        <LogoImg src={LogoImage} />
        <LogoText>Archiving</LogoText>
        <SearchExperience type="text" placeholder="내 경험 검색하기" />
      </Logo>
      <NavButtons>
        <TimelineButton>타임라인</TimelineButton>
        <ListButton>글 리스트</ListButton>
        <AddLinkButton>링크 추가하기</AddLinkButton>
        <AddExperience>경험 추가하기</AddExperience>
        <Profile>
          <ProfileImg src={UserProfile} />
          <ProfileName>사용자 이름</ProfileName>
        </Profile>
      </NavButtons>
    </GlobalContainer>
  );
};

export default GlobalNavBar;
