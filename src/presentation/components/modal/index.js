import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  DataInputProvider,
  useDataInput,
} from "../../../service/providers/data_input_provider";
import ModalSheet from "./ModalSheet";
import ModalView from "./ModalView";
import "./ModalLayout.css";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ isExpanded }) =>
    isExpanded ? "#fff" : "rgba(0, 0, 0, 0.7)"};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Div = ({ children }) => {
  const dataInput = useDataInput();

  return <Background isExpanded={dataInput.isExpanded}>{children}</Background>;
};

export const ModalSheetBuilder = ({ modalType, showModal, setShowModal }) => {
  // const dataInput = useDataInput();
  if (modalType === "post") {
    return <ModalView />;
  }

  return (
    <DataInputProvider>
      {showModal ? (
        <Div
          children={
            <ModalWrapper showModal={showModal}>
              <ModalSheet modalType={modalType} />
            </ModalWrapper>
          }
        />
      ) : null}
    </DataInputProvider>
  );
};
export default ModalSheetBuilder;
