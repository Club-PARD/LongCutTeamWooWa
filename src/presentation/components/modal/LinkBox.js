// import styled from "styled-components";
// import img1 from "../../../assets/img/link.png";
// import React from "react";
// import InputTextField from "../commons/InputTextField";
// import VerticalSpacing from "../commons/VerticalSpacing";
// import { useUpdateDataInput } from "../../../service/providers/data_input_provider";

// const Title = styled.div`
//   height: 22px;
//   font-family: ${props => props.theme.fontFamily.mainfont};
//   font-weight: ${props => props.theme.fontWeights.regular};
//   font-size: ${props => props.theme.fontSizes.Body2};
//   color: ${props => props.theme.color.blackHigh};
//   font-style: normal;
//   line-height: 22px;

// `;

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0px 11px;
// `;

// const Img1 = styled.img`
//   margin-left: auto;
// `;

// const InputDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   height: 41px;
//   background: ${props => props.theme.color.searchBackground};
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
//   border-radius: 10px;
//   border: none;
//   outline: none;
//   padding: 0px 13px;
// `;

// const Input = styled.input`
//   font-family: ${props => props.theme.fontFamily.mainfont};
//   font-weight: ${props => props.theme.fontWeights.regular};
//   font-size: ${props => props.theme.fontSizes.Body2};
//   line-height: 22px;
//   background: #ebebeb;
//   border: none;
//   outline: none;
//   width: 100%;
// `;

// function LinkBox() {
//   const updateDataInput = useUpdateDataInput();
//   const handleInputChange = (name, value) => {
//     updateDataInput(name, value);
//   };
//   return (
//     <Div>
//       <Title>나의 경험이 기록된 링크를 입력하고 저장하세요!</Title>
//       <VerticalSpacing height={15} />
//       <InputDiv>
//         <Input placeholder="링크 삽입하기" onChange={(event) => handleInputChange("add-link", event.target)} />
//         <Img1 src={img1} />
//       </InputDiv>
//       <VerticalSpacing height={42} />
//     </Div>
//   );
// }

// export default LinkBox;

import styled from "styled-components";
import img1 from "../../../assets/img/link.png";
import React, { useState } from "react";
import InputTextField from "../commons/InputTextField";
import VerticalSpacing from "../commons/VerticalSpacing";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";

const Title = styled.div`
  height: 22px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 22px;
  margin-top : 20px; 
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

function LinkBox() {
  const updateDataInput = useUpdateDataInput();
  const [link, setLink] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const handleInputChange = (event) => {
    let inputValue = event.target.value || "";
  
    if (!inputValue && event.clipboardData) {
      const clipboardText = event.clipboardData.getData("text/plain");
      inputValue = clipboardText || "";
    }
  
    setLink(inputValue);
  
    if (inputValue.trim() === "") {
      setIsValidUrl(true);
    } else {
      const urlRegex = new RegExp(
        "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      setIsValidUrl(urlRegex.test(inputValue));
    }
  
    updateDataInputHandler("add-link");
  };
  
  const updateDataInputHandler = (name) => {
    updateDataInput(name, link);
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
