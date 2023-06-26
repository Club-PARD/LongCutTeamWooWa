import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';

// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
// import ExperienceCardLink from "./presentation/components/commons/ExperienceCardLink";
// import ModalView from "./presentation/components/modal/ModalView";
// import ModalSheetBuilder from "./presentation/components/modal";
// import Hompage from "./presentation/pages/HomePage"
// import Header from "./presentation/components/header/Header";
import GlobalNavBar from "./presentation/components/Nav/GlobalNavBar";
import CategoryBuilder from "./presentation/components/catagory";

const TestPage = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* <ModalSheetBuilder modalType={"add-free"} /> */}
            <CategoryBuilder/>
            {/* <DateSelector/> */}
            {/* <Hompage/> */}
        </ThemeProvider>
        // <DisquiteCrawlerForm/>
    );
}

export default TestPage;