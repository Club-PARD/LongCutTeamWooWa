import InputTextArea from "../commons/InputTextArea";
import styled from "styled-components";
import SingleScrollView from "../commons/SingleScrollView";
import { UseDataInput, useUpdateDataInput } from "../../../service/providers/data_input_provider";
import { debounce } from "lodash";
import React from "react";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding-top: 0px;
  padding-left: 11px;
  padding-right: 5px;
  padding-bottom: 15px;  
`;

const ModalWritingContent = () => {

  const updateDataInput = useUpdateDataInput();
  const handleInputChange = React.useCallback(
    debounce((value) => {
      updateDataInput("add-free", value);
    }, 200),
    [updateDataInput]
  );

  return (
    <SingleScrollView
      children={
        <ContentDiv>
          <InputTextArea
            placeholder={"나의 경험을 작성하고 저장하세요!"}
            onChange={handleInputChange}
          />
        </ContentDiv>
      }
    />
  );
};

export default ModalWritingContent;
