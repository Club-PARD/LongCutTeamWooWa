import styled from "styled-components";
import React from "react";
const BtnText = styled.div`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Body2};
  color: ${props => props.theme.color.surface};
  line-height: 22px;
  flex: column;
  text-align: center;
`;


const BtnDiv = styled.button`
  padding: 4px 12px;
  background: ${props => props.theme.color.primary300};
  border: 1px solid #CDCDCD;
  border-radius: 100px;
`;

function SubmitBtn({ buttonText, onClick }) {
  return (
    <BtnDiv className="action-button" onClick={onClick}>
      <BtnText>{buttonText}</BtnText>
    </BtnDiv>
  );
}

export default SubmitBtn;
