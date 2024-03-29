import React from "react";
import styled from "styled-components";
import SubmitBtn from "../buttons/SubmitBtn";
import CancelBtn from "../buttons/CancelBtn";
import ExitModalBtn from "../buttons/ExitModalBtn";
import {
  useDataInput,
  useUpdateDataInput,
} from "../../../service/providers/data_input_provider";

const PopUpContainer = styled.div`
  display: flex;
  width: 510px;
  height: 217px;
  border-radius: 10px;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnCantainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  width: 10px;
`;

const FirstText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  flex: column;
  text-align: center;
  margin-bottom: 0px;
`;

const SecondText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  flex: column;
  text-align: center;
  margin-top: 8px;
`;

function PopUp({
  imgSrc,
  text1,
  text2,
  id,
  close,
  handleModalOpen,
  handleSetModalType,
}) {
  const dataInput = useDataInput();
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (value) => {
    updateDataInput("add-free", value);
    updateDataInput("add-template-1", value);
    updateDataInput("add-template-2", value);
  };
  const handleExitModal = () => {
    handleModalOpen();
    dataInput.isExpanded = false;
  };

  return (
    <PopUpContainer>
      <img src={imgSrc} alt="PopUp-Icon" />
      <TextContainer>
        <FirstText>{text1}</FirstText>
        <SecondText>{text2}</SecondText>
      </TextContainer>
      {id === 1 ? (
        <BtnCantainer>
          <CancelBtn buttonText="계속 작성하기" onClick={close} />
          <Space />
          <ExitModalBtn buttonText="나가기" onClick={handleExitModal} />
        </BtnCantainer>
      ) : id === 3 ? (
        <BtnCantainer>
          <CancelBtn buttonText="돌아가기" onClick={close} />
          <Space />
          <ExitModalBtn
            buttonText="템플릿 보기"
            onClick={() => {
              handleSetModalType();
              close();
              handleInputChange(null);
            }}
          />
        </BtnCantainer>
      ) : id === 4 ? (
        <BtnCantainer>
          <CancelBtn buttonText="돌아가기" onClick={close} />
          <Space />
          <ExitModalBtn
            buttonText="자유작성하기"
            onClick={() => {
              handleSetModalType();
              close();
            }}
          />
        </BtnCantainer>
      ) : (
        <SubmitBtn buttonText="확인" />
      )}
    </PopUpContainer>
  );
}

export default PopUp;
