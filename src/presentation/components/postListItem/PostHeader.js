import React, { useState } from "react";
import styled from "styled-components";
import close_icon from "../../../assets/img/close_icon.svg";

const HeaderContainer = styled.div`
    width : 100%; 
    height : 90px; 
    background-color : ${(props) => props.theme.color.primary200};
    
    display : flex; 
    justify-content: space-between;
    align-items: center;
`

const HeaderIcon = styled.img`
  width : 15px; 
  height : 15px; 
  flex-direction: column;
`
const UserId = styled.div`
justify-content: center;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.Subtitle1};
  color: ${props => props.theme.color.blackHigh};
`
const Close_icon = styled.button`
  width : 15px; 
  height : 15px; 
`

function PostHeader() {
  return (
    <HeaderContainer>
      <HeaderIcon src={close_icon} alt="닫기버튼" />
      <UserId>
        tmdgnstmdgnstmdgns
      </UserId>
      <Close_icon src={close_icon} alt="닫기버튼" />
    </HeaderContainer>
  );
}

export default PostHeader;  