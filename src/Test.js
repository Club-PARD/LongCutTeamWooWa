import React from "react";
import styled from "styled-components";
// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCard from "./presentation/components/commons/ExperienceCard";

const TestPage = () => {
    const tagValue = "태그";
    const titleValue = "제목";
    const summaryValue = "요약 내용입니다. 요약내용입니다. 요약내용입니다. 요약내용입니다 요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.";
    const IMG = "https://img.hankyung.com/photo/202105/PRU20210518011301055_P4.jpg";
  
    return (
      <div>
        <ExperienceCard 
            tag={tagValue} 
            title={titleValue} 
            summary={summaryValue} 
            imgSrc={IMG}
        />
      </div>
    );
}

export default TestPage;