import styled from "styled-components";
import img1 from "../../../assets/img/link.png";
import React from "react";
import InputTextField from "../commons/InputTextField";
import VerticalSpacing from "../commons/VerticalSpacing";

const Title = styled.div`
  height: 22px;
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
  padding: 0px 11px;
`;

const Img1 = styled.img`
  margin-left: auto;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 41px;
  background: #ebebeb;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 13px;
`;

const Input = styled.input`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  background: #ebebeb;
  opacity: 0.3;
  border: none;
  outline: none;
  width: 100%;
`;

function LinkBox() {
  return (
    <Div>
      <Title>나의 경험이 기록된 링크를 입력하고 저장하세요!</Title>
      <VerticalSpacing height={15}/>
      <InputDiv>
        <Input placeholder="링크 삽입하기" />
        <Img1 src={img1} />
      </InputDiv>
      <VerticalSpacing height={42}/>
    </Div>
  );
}

export default LinkBox;
