import styled, { css } from "styled-components";
import img1 from "../../../assets/img/image.svg";
import img2 from "../../../assets/img/template.svg";
import img2_1 from "../../../assets/img/activeTemplate.svg";
import InputTextField from "../commons/InputTextField";
import PopUpBuilder from "../popup/PopUpBuilder";
import DragAndDrop from "../dragAndDrop/DragAndDrop";
import { Card } from "antd";
import React, { useState } from "react";
import useFileSelection from "../dragAndDrop/hooks/useFileSelection.js";
import {
  useUpdateDataInput,
  useDataInput,
} from "../../../service/providers/data_input_provider";

function InputTitle({ modalType, handleSetModalType }) {
  const updateDataInput = useUpdateDataInput();

  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };
  const dataInput = useDataInput();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedFile, addFile, removeFile] = useFileSelection();
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const [isDragAndDropOpen, setIsDragAndDropOpen] = useState(false);
  const handleImgBtnClick = () => {
    setIsDragAndDropOpen(true);
  };
  const handleBackgroundClick = () => {
    setIsDragAndDropOpen(false);
  };
  const handleDragAndDropClick = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log(
        `파일 "${selectedFile.name}"이(가) 성공적으로 제출되었습니다!`
      );
    } else {
      console.log("파일이 선택되지 않았습니다!");
    }
    setIsDragAndDropOpen(false);
  };

  return (
    <Div>
      <InputTextField
        onChange={(value) => handleInputChange("title", value)}
        placeholder="제목 입력"
        fontsize={24}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <ImgBtn onClick={handleImgBtnClick}>
          <Img1 src={img1} />
          <TextDiv>이미지</TextDiv>
        </ImgBtn>
        <TempBtn
          onClick={() =>
            dataInput["add-template-1"] ||
            dataInput["add-template-2"] ||
            dataInput["add-free"]
              ? handlePopupOpen()
              : handleSetModalType()
          }
        >
          <Img2 src={img2} modalType={modalType} />
          <TextDiv modalType={modalType}>템플릿</TextDiv>
        </TempBtn>
      </div>
      {isPopupOpen && (
        <Background>
          <PopUpContainer>
            <PopUpBuilder
              id={modalType === "add-template" ? 4 : 3}
              close={handlePopupClose}
              handleSetModalType={handleSetModalType}
            />
          </PopUpContainer>
        </Background>
      )}
      {isDragAndDropOpen && (
        <Background2 onClick={handleBackgroundClick}>
          <DragNDropContainer onClick={handleDragAndDropClick}>
            <Card style={{ margin: "auto" }}>
              <DragAndDrop
                addFile={addFile}
                removeFile={removeFile}
                handleSubmit={handleSubmit} //여기서 handleSubmit 함수 전달
              />
            </Card>
          </DragNDropContainer>
        </Background2>
      )}
    </Div>
  );
}
export default InputTitle;

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

const Background = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Background2 = styled.div`
  margin: 1%;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
`;

const PopUpContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
const DragNDropContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
