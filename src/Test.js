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

const TestPage = () => {
    return (
       <PopUp
        imgSrc={Image}
        text1={"경험 기록이 저장되었습니다."} 
        text2={"이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!"}
        />
        
       //<ModalSheet title={"경험 작성하기"} isTemplate={true}/>
>>>>>>> 7997378d0de27b8fea013effe9aa42be0cb4fab1
    );
}

export default TestPage;