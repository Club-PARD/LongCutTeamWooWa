import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 330px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 36px;
  background: var(--serch-background, #efefef);
  padding: 0 4px;
  padding-right: 4px;
  margin-top: 0px;
`;

const Button = styled.button`
  width: 162px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 34.333px;
  background: ${(props) =>
    props.isActive ? "var(--surface-white, #FFF)" : "transparent"};
  font-size: ${(props) => (props.isActive ? "14px" : "14px")};
  font-family: Pretendard;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  line-height: 160%;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.4")};
  transition: opacity 1.5s ease-in-out;
`;

function IDvsLinkButton({ isActive, handleClick }) {
  return (
    <ButtonContainer>
      <Button isActive={isActive} onClick={() => handleClick(false)}>
        ID로 불러오기
      </Button>
      <Button isActive={!isActive} onClick={() => handleClick(true)}>
        개별 링크로 불러오기
      </Button>
    </ButtonContainer>
  );
}

export default IDvsLinkButton;
