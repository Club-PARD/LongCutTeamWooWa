import styled from "styled-components";

const BtnText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  flex: column;
  text-align: center;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 95px;
  background: #d8d8d8;
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
