import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';

// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
// import DateSelector from "./presentation/components/DateSelector";
import ExperienceCardLink from "./presentation/components/commons/ExperienceCardLink";
// import ModalView from "./presentation/components/modal/ModalView";
import ModalSheetBuilder from "./presentation/components/modal";
import Hompage from "./presentation/pages/HomePage"
import Timeline from "./presentation/components/timeline";

const TestPage = () => {
    const snapshots = [
        { id: 1, time: '9:00 AM' },
        { id: 2, time: '10:30 AM' },
        { id: 3, time: '12:00 PM' },
        { id: 4, time: '2:30 PM' },
        { id: 5, time: '4:00 PM' },
        { id: 6, time: '6:00 PM' },
        { id: 7, time: '8:00 PM' },
        { id: 8, time: '9:00 AM' },
        { id: 9, time: '10:30 AM' },
        { id: 10, time: '12:00 PM' },
        { id: 11, time: '2:30 PM' },
        { id: 12, time: '4:00 PM' },
        { id: 13, time: '6:00 PM' },
        { id: 14, time: '8:00 PM' },
        { id: 15, time: '9:00 AM' },
        { id: 16, time: '10:30 AM' },
        { id: 17, time: '12:00 PM' },
        { id: 18, time: '2:30 PM' },
        { id: 19, time: '4:00 PM' },
        { id: 20, time: '6:00 PM' },
        { id: 21, time: '8:00 PM' },
        
      ];
    return (
        <ThemeProvider theme={theme}>
            <Timeline snapshots={snapshots}/>
            {/* <ModalSheetBuilder modalType={"add-free"} /> */}
            {/* <Hompage/> */}
        </ThemeProvider>
        // <DisquiteCrawlerForm/>
    );
}

export default TestPage;