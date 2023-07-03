import styled from "styled-components";
import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDataInput } from "../../../service/providers/data_input_provider";

const BtnText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.surface};
  line-height: 22px;
  flex: column;
  text-align: center;
`;

const BtnDiv = styled.button`
  padding: 4px 12px;
  background: ${(props) =>
    props.disabled ? "grey" : props.theme.color.primary300};
  border: 1px solid #cdcdcd;
  border-radius: 100px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function SubmitBtn({ handleSnack, handleModalOpen, onSubmit, buttonText }) {
  const [open, setOpen] = React.useState(false);
  const [isBusy, setIsBusy] = React.useState(false);

  const dataInput = useDataInput();

  const handleClose = () => {
    handleModalOpen();
    handleSnack();
  };

  const checkValidity = () => {
    console.log(dataInput["selected-tags"]);
    return (
      (dataInput["title"] &&
        dataInput["selected-tags"] &&
        Object.entries(dataInput["selected-tags"]).length < 3 &&
        Object.entries(dataInput["selected-tags"]).length > 0 &&
        ((dataInput["add-template-1"] && dataInput["add-template-2"]) ||
          dataInput["add-free"])) ||
      (dataInput["selected-tags"] &&
        Object.entries(dataInput["selected-tags"]).length < 3 &&
        Object.entries(dataInput["selected-tags"]).length > 0 &&
        dataInput["add-link"])
    );
  };

  const handleClick = async () => {
    if (isBusy) return;

    setIsBusy(true);
    console.log("hi");
    await onSubmit();
    setOpen(true);
    setIsBusy(false);
    if (buttonText === "기록하기") handleClose();
  };

  return (
    <>
      <BtnDiv
        onClick={!isBusy ? handleClick : () => {}}
        disabled={!checkValidity()}
      >
        <BtnText>{buttonText}</BtnText>
      </BtnDiv>
    </>
  );
}

export default SubmitBtn;
