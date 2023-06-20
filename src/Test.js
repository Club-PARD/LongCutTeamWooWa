import ModalSheet from "./presentation/components/modal/ModalSheet";
import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
// import PopUp from "./presentation/components/popup/PopUp";
// import save_icon from "./assets/img/popup_save.svg";
import DatePicker from "./presentation/components/DatePicker";

const TestPage = () => {
    return (
        <DatePicker/>
=======
import PopUp from "./presentation/components/popup/PopUp";
import Image from "./assets/img/popup_save.svg";
import PopUpBuilder from "./presentation/components/popup/PopUpBuilder";

const TestPage = () => {
    return (
        //<PopUpBuilder id={2}/>
        
       <ModalSheet title={"경험 작성하기"} isTemplate={true}/>
    );
}

export default TestPage;