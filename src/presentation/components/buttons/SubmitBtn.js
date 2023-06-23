import styled from "styled-components";
import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
  background: ${(props) => props.theme.color.primary300};
  border: 1px solid #cdcdcd;
  border-radius: 100px;
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SubmitBtn({onSubmit, buttonText }) {
  const [open, setOpen] = React.useState(false);
  const [isBusy, setIsBusy] = React.useState(false);

  const handleClick = async () => {
    if(isBusy) return;

    setIsBusy(true);
    console.log("hi");
    await onSubmit();
    setOpen(true);
    setIsBusy(false);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <BtnDiv onClick={!isBusy ? handleClick : () => {}}>
        <BtnText>{buttonText}</BtnText>
      </BtnDiv>
      {buttonText === "기록하기" && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              기록이 완료되었습니다.
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
}

export default SubmitBtn;
