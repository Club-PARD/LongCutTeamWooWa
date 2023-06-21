// import ModalSheet from "./presentation/components/modal/ModalSheet";
import React from "react";
import styled from "styled-components";
// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCard from "./presentation/components/commons/ExperienceCard";

const TestPage = () => {
    const tagValue = "태그";
    const titleValue = "제목";
    const summaryValue = "요약 내용";
  
    return (
      <div>
        <ExperienceCard tag={tagValue} title={titleValue} summary={summaryValue} />
      </div>
    );
}

export default TestPage;