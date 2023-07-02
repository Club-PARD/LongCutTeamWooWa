import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImage from "../../../assets/img/LogoImg.svg";
import LogoText from "../../../assets/img/LogoText.svg";
import UserProfile from "../../../assets/img/UserProfileExample.svg";
import SearchIcon from "../../../assets/img/SearchIcon.svg";

const GlobalContainer = styled.div`
  background-color: ${props => props.theme.color.blackHigh};
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left : 70px; 
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LogoTextImg = styled.img`
  width: 64px;
  height: 41px;
`;

const SearchExperience = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-left: 80px;
  padding: 5px;
  border-radius: 40px;
  flex-shrink: 0;
  background-color: ${props => props.theme.color.searchBackground};
`;

const SearchIconImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left : 8px; 
  margin-right: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.color.blackHigh};
  // color: var(--disabled-1, #ABABAB);
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  // font-weight: ${props => props.theme.fontWeights.regular};
  font-weight: 500;
  
  &::placeholder {
    color: var(--disabled-1, #ABABAB);
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  padding-right: 70px; 
`;

const TimelineButton = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  color: #F8F5F0;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-size: ${props => props.theme.fontSizes.Subtitle2};
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
  font-size: ${props => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #343434;
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
  border-radius: 50%; 
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
        <LogoTextImg src={LogoText} />
        <SearchExperience>
          <SearchIconImg src={SearchIcon} />
          <SearchInput type="text" placeholder="내 경험 검색하기" />
        </SearchExperience>
      </Logo>
      <NavButtons>
        {/* <TimelineButton>타임라인</TimelineButton>
        <ListButton>글 리스트</ListButton> */}
        
        <Profile>
          <ProfileImg src={UserProfile} />
          <ProfileName>사용자 이름</ProfileName>
        </Profile>
      </NavButtons>
    </GlobalContainer>
  );
};

export default GlobalNavBar;
