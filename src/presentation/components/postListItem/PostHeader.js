import React, { useState } from "react";
import styled from "styled-components";
import Logo_Disquiet from "../../../assets/img/Logo_Disquiet.png";
import CloseIcon from "../../../assets/img/close_icon.svg";
import IconButton from "../buttons/IconBtn";

const HeaderContainer = styled.div`
    width : 100%; 
    height : 90px; 
    // background-color : ${(props) => props.theme.color.primary200};
    
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
const Close_icon = styled.button`
  width : 15px; 
  height : 15px; 
  margin-right : 10px; 
`

function PostHeader({ data }) {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderIcon src={Logo_Disquiet} alt="로고이미지" />
      <UserId>{data["userId"]}</UserId>
      <IconButton
        iconImage={CloseIcon}
        size={"24px"}
        onClick={handlePopupClose}
      />
    </HeaderContainer>
  );
}

export default PostHeader;  