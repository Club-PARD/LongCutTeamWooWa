import styled from "styled-components";
import React from "react";
import InputTextArea from "../commons/InputTextArea";

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  color: #222222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: start;
  margin-bottom: 9.93px;
  height: 50px; /* Adjust the height as needed */
  background-color: #fff; /* Add background color if desired */
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 11px;
`;

function ModalContent2({onChange}) {
  return (
    <ContentDiv>
      <Header>
        이 경험에서 좋았던 포인트는 무엇이며
        <br />
        왜 그렇게 생각하셨나요?
      </Header>
      <InputTextArea placeholder={"나의 경험을 작성하고 저장하세요!"} onChange={onChange} />
    </ContentDiv>
  );
}

export default ModalContent2;
