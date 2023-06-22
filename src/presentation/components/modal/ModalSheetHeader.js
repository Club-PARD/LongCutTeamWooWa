import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '../buttons/IconBtn';
import CloseIcon from '../../../assets/img/close_icon.svg';
import ExpandIcon from '../../../assets/img/expand_icon.svg';
const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 10px;
`;

const ModalExpandIcon = styled.img`
  width: 24px;
  height: 24px;
`

const ModalHeaderContent = styled.div`
width: 100px;
height: 24px;
font-size : 100px; 
`
const ModalCloseIcon = styled.img`
width: 24px;
height: 24px;
`

 function ModalHeader({title, onExpandClick, onCloseClick}) {
  return (
    <ModalHeaderContainer>
      <IconButton iconImage={ExpandIcon} size={"24px"} onClick={onExpandClick}/>
      <ModalHeaderContainer>
        {title}
      </ModalHeaderContainer>
      <IconButton iconImage={CloseIcon} size={"24px"} onClick={onCloseClick}/>
    </ModalHeaderContainer>
  );
}

export default ModalHeader;
