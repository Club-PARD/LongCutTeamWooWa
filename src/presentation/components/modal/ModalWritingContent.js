import InputTextArea from "../commons/InputTextArea";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 0px 11px;
`;
const ModalWritingContent = () => {
    return (<ContentDiv>
        <InputTextArea placeholder={"나의 경험을 작성하고 저장하세요!"}/>
    </ContentDiv>);
}

export default ModalWritingContent;