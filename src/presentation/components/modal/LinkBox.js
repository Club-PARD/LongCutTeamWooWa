import styled from "styled-components";
import img1 from "../../../assets/img/link.png";
import React, { useState, useEffect } from "react";
import VerticalSpacing from "../commons/VerticalSpacing";
import { useDataInput, useUpdateDataInput } from "../../../service/providers/data_input_provider";

const Title = styled.div`
  height: 22px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 22px;
  margin-top: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 11px;
`;

const Img1 = styled.img`
  margin-left: auto;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 41px;
  background: ${(props) => props.theme.color.searchBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 13px;
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  line-height: 22px;
  background: #ebebeb;
  border: none;
  outline: none;
  width: 100%;
`;

const WarningText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  line-height: 22px;
  color: ${(props) => props.theme.color.error};
`;
const urlRegex = require("url-regex");

function LinkBox({ handleIsDisable }) {
  const dataInput = useDataInput();
  const updateDataInput = useUpdateDataInput();
  const [link, setLink] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const checkTagValidity = () => {
    console.log( dataInput['selected-tags']);
    if(dataInput['selected-tags'] === undefined || dataInput['selected-tags'] === null ) return false;
    return dataInput['selected-tags'].length > 0;
  }
  const checkLinkValidity = () => {
    return isValidUrl;
  }
  const checkLinkNotEmpty = () => {
    return link.length > 0;
  }
  useEffect(() => {
    handleIsDisable(!(checkTagValidity() && checkLinkValidity() && checkLinkNotEmpty()));
  }, [dataInput['selected-tags']]);
  const handleInputChange = (event) => {
    const inputValue = event.target.value || "";

    setLink(inputValue);
    handleIsDisable(!(checkTagValidity() && checkLinkValidity() && checkLinkNotEmpty()));


    if (event.type === "paste") {
      event.preventDefault();

      const clipboardText = event.clipboardData.getData("text/plain");
      const clipboardValue = clipboardText || "";

      setIsValidUrl(urlRegex({ exact: true }).test(clipboardValue));

      updateDataInputHandler("add-link", clipboardValue);
      

    } else {
      setIsValidUrl(urlRegex({ exact: true }).test(inputValue));

      updateDataInputHandler("add-link", inputValue);
    }
   
  };

  const updateDataInputHandler = (name, value) => {
    setLink(value);
    updateDataInput(name, value);
  };

  return (
    <Div>
      <Title>나의 경험이 기록된 링크를 입력하고 저장하세요!</Title>
      <VerticalSpacing height={15} />
      <InputDiv>
        <Input
          placeholder="링크 삽입하기"
          value={link}
          onChange={handleInputChange}
          onPaste={handleInputChange}
        />
        <Img1 src={img1} />
      </InputDiv>
      <VerticalSpacing height={20} />
      {!isValidUrl && <WarningText>유효하지 않은 링크입니다.</WarningText>}
    </Div>
  );
}

export default LinkBox;
