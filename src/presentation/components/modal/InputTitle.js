import styled from "styled-components";

import img1 from "../../../assets/img/이미지.png";
import img2 from "../../../assets/img/템플릿.png";
import InputTextField from "../commons/InputTextField";
import React from "react";

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8px;
`;

const Img1 = styled.img`
  
`;

const Img2 = styled.img`

`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 11px;
`;

const TextDiv = styled.div`
  white-space: nowrap;
  height: 22px;
  font-family: Pretendard;
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
      <InputTextField placeholder="제목 입력" fontsize={24}/>
      <div style={{display: "flex", gap: "10px"}}>
      <ImgDiv>
        <Img1 src={img1} />
        <TextDiv>이미지</TextDiv>
      </ImgDiv>
      <ImgDiv>
        <Img2 src={img2} />
        <TextDiv>템플릿</TextDiv>
      </ImgDiv>
      </div>
    </Div>
  );
}
export default InputTitle;
