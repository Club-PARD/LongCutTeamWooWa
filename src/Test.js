import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import PopUp from "./presentation/components/popup/PopUp";
import save_icon from "./assets/img/popup_save.svg";
=======
import LinkBox from "./presentation/components/modal/LinkBox";
>>>>>>> 6e899520f22a43ba8ac6d0d40277d46f0d636c5c

const TestPage = () => {
    const imgSrc = "LongCutTeamWooWa/src/assets/img/popup_save.svg"; // 다른 곳에서 전달받은 이미지 경로

    return (
<<<<<<< HEAD
       <PopUp 
        imgSrc={imgSrc}
        text1={"경험 기록이 저장되었습니다."} 
        text2={"이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!"}
        />
=======
        
       <ModalSheet title={"경험 작성하기"} isTemplate={true}/>
>>>>>>> 6e899520f22a43ba8ac6d0d40277d46f0d636c5c
    );
}

export default TestPage;