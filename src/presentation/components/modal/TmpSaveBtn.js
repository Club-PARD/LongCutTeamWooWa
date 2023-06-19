import styled from "styled-components";
/* 컴포넌트에서 빠질것임 */ 
const BtnText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  opacity: 0.6;
  border-radius: 10px;
`;

function TmpSaveBtn() {
  return (
    <BtnDiv>
        <BtnText>임시저장</BtnText>
    </BtnDiv>
  );
}
export default TmpSaveBtn;
