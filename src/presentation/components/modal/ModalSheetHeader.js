import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IconButton from "../buttons/IconBtn";
import CloseIcon from "../../../assets/img/close_icon.svg";
import ExpandIcon from "../../../assets/img/expand_icon.svg";
import ReductionIcon from "../../../assets/img/reduction.svg";
import PopUpBuilder from "../popup/PopUpBuilder";
import { useDataInput, useUpdateDataInput } from "../../../service/providers/data_input_provider";

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

const Background = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
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

const PopUpContainer = styled.div`;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;


function ModalHeader({ title }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };
  const dataInput = useDataInput();

  return (
    <ModalHeaderContainer>
      <IconButton
        iconImage={dataInput.isExpanded ? ReductionIcon : ExpandIcon}
        size={"24px"}
        onClick={() => {
          const isExpanded = dataInput.isExpanded;
          handleInputChange("isExpanded", !isExpanded);
        }}
      />
      <ModalHeaderContainer>{title}</ModalHeaderContainer>
      <IconButton
        iconImage={CloseIcon}
        size={"24px"}
        onClick={handlePopupOpen}
      />
      {isPopupOpen && (
        <Background>
        <PopUpContainer>
          <PopUpBuilder id={1} close={handlePopupClose} />
        </PopUpContainer>
        </Background>
      )}
    </ModalHeaderContainer>
  );
}

export default ModalHeader;

