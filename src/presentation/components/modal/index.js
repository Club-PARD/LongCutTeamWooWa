import React, { useState } from "react";
import styled from "styled-components";
import {
  DataInputProvider,
  useDataInput,
} from "../../../service/providers/data_input_provider";
import ModalSheet from "./ModalSheet";
import ModalView from "./ModalView";
import "./ModalLayout.css";
import { ImageInputProvider } from "../../../service/providers/image_input_provider";

const Div = ({ children }) => {
  const dataInput = useDataInput();

  return <Background isExpanded={dataInput.isExpanded}>{children}</Background>;
};

export const ModalSheetBuilder = ({
  modalType,
  handleSnack,
  handleSetModalType,
  isModalOpen,
  handleModalOpen,
  handleListDialog,
  handleSetRerender,
}) => {
  // if (modalType === "post") {
  //   return <ModalView postDotData={postDotData} />;
  // }

  return (
    <>
      {isModalOpen ? (
        <Div
          children={
            <ModalWrapper>
              <ImageInputProvider>
                <ModalSheet
                  handleSetRerender={handleSetRerender}
                  handleSnack={handleSnack}
                  modalType={modalType}
                  handleSetModalType={handleSetModalType}
                  handleModalOpen={handleModalOpen}
                  handleListDialog={handleListDialog}
                />
              </ImageInputProvider>
            </ModalWrapper>
          }
        />
      ) : null}
    </>
  );
};
export default ModalSheetBuilder;

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${({ isExpanded }) =>
    isExpanded ? "#fff" : "rgba(0, 0, 0, 0.5)"};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  z-index: 20;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
