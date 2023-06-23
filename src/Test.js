import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';

// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCardLink from "./presentation/components/commons/ExperienceCardLink";
// import ModalView from "./presentation/components/modal/ModalView";
import ModalSheetBuilder from "./presentation/components/modal";
import DisquiteCrawlerForm from "./service/disquite_api_form";


const TestPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <ModalSheetBuilder modalType={"add-free"} />
        </ThemeProvider>
        // <DisquiteCrawlerForm/>
    );
}

export default TestPage;