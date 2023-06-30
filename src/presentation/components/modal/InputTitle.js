import styled, { css } from "styled-components";
import img1 from "../../../assets/img/image.svg";
import img2 from "../../../assets/img/template.svg";
import img2_1 from "../../../assets/img/activeTemplate.svg";
import InputTextField from "../commons/InputTextField";
import React from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";

const ImgBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TempBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Img1 = styled.img``;

const Img2 = styled.img`
${({ modalType }) =>
modalType === "add-template" &&
css`
  content: url(${img2_1});
`};
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 11px;
`;

const TextDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  ${({ modalType }) =>
modalType === "add-template" &&
css`
font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: black;
`};
  font-style: normal;
  white-space: nowrap;
  height: 22px;
  line-height: 22px;
  text-align: center;
`;

function InputTitle({ modalType, handleSetModalType }) {
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };

  return (
    <Div>
      <InputTextField
        onChange={(value) => handleInputChange("title", value)}
        placeholder="제목 입력"
        fontsize={24}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <ImgBtn>
          <Img1 src={img1} />
          <TextDiv>이미지</TextDiv>
        </ImgBtn>
        <TempBtn onClick={handleSetModalType}>
          <Img2 src={img2} modalType={modalType} />
          <TextDiv modalType={modalType}>템플릿</TextDiv>
        </TempBtn>
      </div>
    </Div>
  );
}
export default InputTitle;
