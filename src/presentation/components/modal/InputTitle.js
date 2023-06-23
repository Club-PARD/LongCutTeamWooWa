import styled from "styled-components";

import img1 from "../../../assets/img/이미지.png";
import img2 from "../../../assets/img/템플릿.png";
import InputTextField from "../commons/InputTextField";
import React from "react";
import { UseDataInput, useUpdateDataInput } from "../../../service/providers/data_input_provider";

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
  align-items: center;
  justify-content: space-between;
  padding: 0px 11px;
`;

const TextDiv = styled.div`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Body2};
  color: ${props => props.theme.color.blackHigh};
  font-style: normal;
  white-space: nowrap;
  height: 22px;
  line-height: 22px;
  text-align: center;
`;

function InputTitle() {
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };
  return (
    <Div>
      <InputTextField onChange={(value) => handleInputChange("title", value)} placeholder="제목 입력" fontsize={24}/>
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
