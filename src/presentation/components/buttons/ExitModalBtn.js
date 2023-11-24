import styled from "styled-components";
import React from "react";

const BtnText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.surface};
  line-height: 22px;
  flex: column;
  text-align: center;
`;

const BtnDiv = styled.button`
  padding: 4px 12px;
  background: ${(props) => props.theme.color.primary300};
  border: 1px solid #cdcdcd;
  border-radius: 100px;
  cursor: pointer;
`;


function ExitModalBtn({ onClick, buttonText }) {
  
  return (
    <>
      <BtnDiv  onClick={onClick} >
        <BtnText>{buttonText}</BtnText>
      </BtnDiv>
    
    </>
  );
}

export default ExitModalBtn;

