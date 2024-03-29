import React, { useState } from "react";
import styled from "styled-components";
import Logo_Disquiet from "../../../assets/img/Logo_Disquiet.png";
import CloseIcon from "../../../assets/img/close_icon.svg";
import IconButton from "../buttons/IconBtn";

const HeaderContainer = styled.div`
    width : 100%; 
    /* height : auto;  */
    margin-top: 0px;  
    display : flex; 
    justify-content: space-between;
    align-items: center;
`

const HeaderIcon = styled.img`
  flex-direction: column;
  margin-left : 10px; 
  margin-top : 5px;
`
const UserId = styled.div`
  justify-content: center;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.Subtitle1};
  color: ${props => props.theme.color.blackHigh};
`

const CloseButton = styled(IconButton)`
  margin-right: 100px !important;
  margin-left: auto;
`;

function PostHeader({ userId, closeModal }) {
  

  return (
    <HeaderContainer>
      <HeaderIcon src={Logo_Disquiet} alt="로고이미지" />
      <UserId>{userId ?? "no id found"}</UserId>
      <CloseButton
        iconImage={CloseIcon}
        size={"18px"}
        onClick={closeModal}
      />
    </HeaderContainer>
  );
}

export default PostHeader;  