import styled from "styled-components";
import React from "react";
const BtnText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  flex: column;
  text-align: center;
`;

const BtnDiv = styled.button`
  padding: 4px 12px;
  background: #d8d8d8;
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
