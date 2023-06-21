import React from "react";
import ModalSheetBuilder from "./presentation/components/modal/ModalSheetBuilder";
import ModalView from "./presentation/components/modal/ModalView";

const TestPage = () => {
    const tagValue = "태그";
    const titleValue = "제목";
    const summaryValue = "요약 내용";
  
    return (
        <ModalSheetBuilder modalType={"add-template"}/>
    );
}

export default TestPage;