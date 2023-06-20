import styled from "styled-components";
import img1 from "../../../assets/img/이미지.png";
import img2 from "../../../assets/img/템플릿.png";
import React from "react";

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8px;
  margin-left: 10px;
`;

const Img1 = styled.img`
//   width: 19.2px;
//   height: 19.2px;
  
`;

const Img2 = styled.img`
//   width: 19.2px;
//   height: 19.2px;
`;

const Input = styled.input`
  width: 350px;
  height: 37.73px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: #222222;
  opacity: 0.5;
  border: none;
  outline: none; 
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 432px;
  height: 51.63px;
`;

const TextDiv = styled.div`
  width: 37px;
  height: 22px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #363636;
  opacity: 0.3;
`;

function InputTitle() {
  return (
    <Div>
      <Input type="text" placeholder="제목 입력" />
      <ImgDiv>
        <Img1 src={img1} />
        <TextDiv>이미지</TextDiv>
      </ImgDiv>
      <ImgDiv>
        <Img2 src={img2} />
        <TextDiv>템플릿</TextDiv>
      </ImgDiv>
    </Div>
  );
}
export default InputTitle;
