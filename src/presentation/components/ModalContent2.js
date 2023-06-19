import styled from "styled-components";

const Header = styled.div`
  color: #222222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: start;
  margin-bottom: 9.93px;
`;

const Body = styled.div`
  text-align: start;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #222222;
  opacity: 0.3;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

function ModalContent2() {
  return (
    <ContentDiv>
      <Header>
        이 경험에서 좋았던 포인트는 무엇이며
        <br />왜 그렇게 생각하셨나요?
      </Header>
      <Body>나의 경험을 작성하고 저장하세요! </Body>
    </ContentDiv>
  );
}
export default ModalContent2;
