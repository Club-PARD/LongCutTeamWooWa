import styled from "styled-components";

const BtnText = styled.div`
<<<<<<< HEAD:src/presentation/components/SubmitBtn.js
  font-family: Pretendard;
=======
  font-family: "Pretendard";
>>>>>>> 28fd4b779e68556d13996236d62b7fa58404d0c0:src/presentation/components/modal/SubmitBtn.js
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  flex: column;
  text-align: center;
`;

<<<<<<< HEAD:src/presentation/components/SubmitBtn.js
const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 95px;
=======
const BtnDiv = styled.button`
  padding: 4px 12px;
>>>>>>> 28fd4b779e68556d13996236d62b7fa58404d0c0:src/presentation/components/modal/SubmitBtn.js
  background: #d8d8d8;
  border: 1px solid #CDCDCD;
  border-radius: 100px;
`;

function SubmitBtn({ buttonText }) {
  return (
    <BtnDiv>
      <BtnText>{buttonText}</BtnText>
    </BtnDiv>
  );
}

export default SubmitBtn;
