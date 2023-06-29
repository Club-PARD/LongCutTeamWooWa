import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";

// font-family: ${props => props.theme.fontFamily.mainfont};
//   font-weight: ${props => props.theme.fontWeights.semibold};
//   font-size: ${props => props.theme.fontSizes.Body1};
//   color: ${props => props.theme.color.blackHigh};

const ModalContainer = styled.div`
    width : 690px; 
    height : 600px; 
    background-color : ${(props) => props.theme.color.secondary050};
    border-radius: 15px;
    padding : 30px; 
`

function ListModal() {
    return (
      <ModalContainer>
        <PostHeader/>
      
      </ModalContainer>
    );
  }
  
export default ListModal;  