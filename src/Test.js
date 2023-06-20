import React from "react";
import styled from "styled-components";
import PopUp from "./presentation/components/popup/PopUp";
import save_icon from "./assets/img/popup_save.svg";

const TestPage = () => {
    const imgSrc = "LongCutTeamWooWa/src/assets/img/popup_save.svg"; // 다른 곳에서 전달받은 이미지 경로

    return (
       <PopUp 
        imgSrc={imgSrc}
        text1={"경험 기록이 저장되었습니다."} 
        text2={"이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!"}
        />
    );
}

export default TestPage;