import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalTagSelection from './ModalTagSelection';



const Modaldate = styled.div`
    color: gray; 
`


const ModalPostTitle = ({text}) => {
    // return (
    //     <ModalTagSelection  modalTagList={tags} width={400} hasButton={false}/>
    //     <Modaldate>2023년 6월 14일</Modaldate>
    // );
}


export default ModalPostTitle;