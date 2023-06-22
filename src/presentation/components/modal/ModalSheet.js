import "./ModalLayout.css";
import React, { useState } from "react";

import { Divider, DashedDivider } from "../commons/Divider";
import ModalHeader from "./ModalSheetHeader";
import VerticalSpacing from "../commons/VerticalSpacing";
import ModalTagSelection from "./ModalTagSelection";
import InputTitle from "./InputTitle";
import DateSelector from "../DateSelector";
import SubmitBtn from "../buttons/SubmitBtn";
import ModalTemplateContent from "./ModalTemplateContent";
import ModalWritingContent from "./ModalWritingContent";
import LinkBox from "./LinkBox";

const tags = [
  "도전정신",
  "성취감",
  "동기부여",
  "학습",
  "자기존중",
  "문제 해결 능력",
  "협업",
  "리더십",
  "커뮤니케이션",
  "신체적",
  "정서적"
];

const ModalSheet = ({modalType}) => {
  const [inputData, setInputData] = useState({}); // State to store input data
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
}

const onCloseClick = () => {

}
// Function to handle input changes and update the state
const handleInputChange = (name, value) => {
setInputData((prevData) => ({
  ...prevData,
  [name]: value
}));
};
// Function to handle button click and collect the input data
const handleButtonClick = () => {
  // Access the collected input data from the state (inputData)
  console.log(inputData);
};

  const modalTypeInfo = {
    "add-link" : {
        "title" : "링크 추가하기",
        "hasTitleInput" : false,
        "children" : <LinkBox onChange={(link) => handleInputChange("link", link)}/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"} onClick={handleButtonClick}/>
    },
    "add-free" : {
        "title" : "경험 작성하기",
        "hasTitleInput" : true,
        "children" : <ModalWritingContent/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"} onClick={handleButtonClick}/>
    },
    "add-template" : {
        "title" : "경험 작성하기",
        "hasTitleInput" : true,
        "children" : <ModalTemplateContent onChange={(content) => handleInputChange("template", content)}/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"} onClick={handleButtonClick}/>
    },
    "post" : {
        "title" : "경험 제목",
        "hasTitleInput" : false,
        "hasDatePicker" : false,
        "hasTagSelection" : false,
        "Button" : <SubmitBtn buttonText={"수정하기"} onClick={handleButtonClick}/>
    },
  }
  
  const data = modalTypeInfo[modalType];
    if(data === null) return <></>

  return (
    <div
      className="modal-sheet"
      style={{ "--sheet-size": expanded ? "100%" : "500px", "--max-width": "60%" }}
    >
      <ModalHeader title={data["title"]} onExpandClick={handleExpandClick} onCloseClick={onCloseClick} />
      <Divider />
      <VerticalSpacing height={25} />
      {data["hasTitleInput"] ? (
        <>
          <InputTitle onChange={(title) => handleInputChange("titleInput", title)} />
          <VerticalSpacing height={13.9} />
        </>
      ) : (
        <></>
      )}
      {data["children"]}
      {data["hasDatePicker"] ? (
        <>
          <Divider />
          <VerticalSpacing height={14} />
          <DateSelector onChange={(date) => handleInputChange("dateInput", date)} />
          <VerticalSpacing height={14} />
        </>
      ) : (
        <></>
      )}
      {data["hasTagSelection"] != null ? (
        <>
          <Divider />
          <VerticalSpacing height={14} />
          <ModalTagSelection
            title={"태그 입력"}
            hasButton={true}
            modalTagList={tags}
            onChange={(selectedTags) => handleInputChange("tagSelection", selectedTags)}
          />
          <VerticalSpacing height={14} />
          <Divider />
        </>
      ) : (
        <></>
      )}
      {data["Button"] != null ? (
        <>
          <VerticalSpacing height={26.5} />
          <div className="button-layout">
            {data["Button"]}         
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalSheet;
