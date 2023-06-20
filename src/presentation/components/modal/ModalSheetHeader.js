import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';


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

 function ModalHeader({title}) {
  return (
    <ModalHeaderContainer>
      <ModalExpandIcon src={require('../../../assets/img/expand_icon.svg').default} alt="Expand Icon" />
      <ModalHeaderContainer>
        {title}
      </ModalHeaderContainer>
      <ModalCloseIcon src={require('../../../assets/img/close_icon.svg').default} alt="Close Icon" />
    </ModalHeaderContainer>
  );
}

export default ModalHeader;
