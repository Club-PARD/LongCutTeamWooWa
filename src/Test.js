import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCardLink from "./presentation/components/commons/ExperienceCardLink";
// import ModalView from "./presentation/components/modal/ModalView";
import { theme } from './styles/theme';
import ModalWritingContent from "./presentation/components/modal/ModalWritingContent";
const TestPage = () => {
    // const tagValue = "태그";
    // const titleValue = "경험card - 링크로 기록";
    // const summaryValue = "요약 내용입니다. 요약내용입니다. 요약내용입니다. 요약내용입니다 요약내용입니다.요약내용입니다.요약내용입니다.";
    // const IMG = "https://assets.disquiet.io/images/product/thumbnail/33a20baaee7cde30da7a06f262c77972c6ae5821c04823ebfa41864b2e3ea4bc";
  
    return (
        <ThemeProvider theme={theme}>
            {/* <div>
                <ExperienceCardLink 
                    tag={tagValue} 
                    title={titleValue} 
                    summary={summaryValue} 
                    imgSrc={IMG}
                />
          </div> */}
          <ModalWritingContent/>
        </ThemeProvider>
    );
}

export default TestPage;