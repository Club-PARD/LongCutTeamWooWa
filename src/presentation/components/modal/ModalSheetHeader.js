import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IconButton from "../buttons/IconBtn";
import CloseIcon from "../../../assets/img/close_icon.svg";
import ExpandIcon from "../../../assets/img/expand_icon.svg";
import ReductionIcon from "../../../assets/img/reduction.svg";
import PopUpBuilder from "../popup/PopUpBuilder";

const ModalHeaderContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.Body1};
  color: ${(props) => props.theme.color.blackHigh};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ModalExpandIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ModalHeaderContent = styled.div`
  width: 100px;
  height: 24px;
  font-size: 100px;
`;
const ModalCloseIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PopUpContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;


function ModalHeader({ title, onExpandClick, isExpanded }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <ModalHeaderContainer>
      <IconButton
        iconImage={isExpanded ? ReductionIcon : ExpandIcon}
        size={"24px"}
        onClick={onExpandClick}
      />
      <ModalHeaderContainer>{title}</ModalHeaderContainer>
      <IconButton
        iconImage={CloseIcon}
        size={"24px"}
        onClick={handlePopupOpen}
      />
      {isPopupOpen && (
        <PopUpContainer>
          <PopUpBuilder id={1} close={handlePopupClose} />
        </PopUpContainer>
      )}
    </ModalHeaderContainer>
  );
}

export default ModalHeader;

