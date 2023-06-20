import styled from "styled-components";
import img1 from "../../../assets/img/link.png";
import React from "react";

const Title = styled.div`
  height: 22px;
  margin-bottom: 15px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 432px;
  height: 78px;
`;

const Img1 = styled.img`
  margin-left: auto;
  padding-right: 13px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 432px;
  height: 41px;
  background: #ebebeb;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Input = styled.input`
  width: 320px;
  height: 22px;
  margin-left: 11px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  background: #ebebeb;
  opacity: 0.3;
  border: none;
  outline: none;
`;

function LinkBox() {
  return (
    <Div>
      <Title>나의 경험이 기록된 링크를 입력하고 저장하세요!</Title>
      <InputDiv>
        <Input placeholder="링크 삽입하기" />
        <Img1 src={img1} />
      </InputDiv>
    </Div>
  );
}

export default LinkBox;
