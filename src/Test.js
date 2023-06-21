import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCard from "./presentation/components/commons/ExperienceCard";
=======
import ModalSheetBuilder from "./presentation/components/modal/ModalSheetBuilder";
import ModalView from "./presentation/components/modal/ModalView";
>>>>>>> 129a88ed47f2c492da1df46b9f9ee1958ed586c1

const TestPage = () => {
    const tagValue = "태그";
    const titleValue = "제목";
    const summaryValue = "요약 내용";
  
    return (
<<<<<<< HEAD
      <div>
        <ExperienceCard tag={tagValue} title={titleValue} summary={summaryValue} />
      </div>
=======
        <ModalSheetBuilder modalType={"add-link"}/>
>>>>>>> 129a88ed47f2c492da1df46b9f9ee1958ed586c1
    );
}

export default TestPage;