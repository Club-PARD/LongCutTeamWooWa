import styled from "styled-components";
import React from "react";
import InputTextArea from "../commons/InputTextArea";
import SingleScrollView from "../commons/SingleScrollView";

const Header = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body1};
  color: ${(props) => props.theme.color.blackHigh};

  position: sticky;
  top: 0;
  z-index: 1;
  line-height: 160%;
  letter-spacing: 0em;
  text-align: start;
  margin-bottom: 9.93px;
  height: 50px; /* Adjust the height as needed */
  background-color: #fff; /* Add background color if desired */
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  padding-left: 11px;
  padding-right: 5px;
  padding-bottom: 15px;  
  height: 125px;
`;

function ModalContent2({ onChange }) {
  return (
    <SingleScrollView
      children={
        <ContentDiv>
          <Header>
            이 경험에서 좋았던 포인트는 무엇이며
            <br />왜 그렇게 생각하셨나요?
          </Header>
          <InputTextArea
            placeholder={"나의 경험을 작성하고 저장하세요!"}
            onChange={onChange}
          />
        </ContentDiv>
      }
    />
  );
}

export default ModalContent2;
