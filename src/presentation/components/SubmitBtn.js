import styled from "styled-components";

const BtnText = styled.div`
  width: 49px;
  height: 22px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  flex: column;
  order: 0;
  text-align: center;
  flex-grow: 0;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  position: relative;
  width: 95px;
  height: 35px;
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
