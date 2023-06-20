import ModalSheet from "./presentation/components/modal/ModalSheet";
import ModalTagSelection from "./presentation/components/modal/ModalTagSelection";
import React from "react";
import LinkBox from "./presentation/components/modal/LinkBox";

const TestPage = () => {
    const imgSrc = "LongCutTeamWooWa/src/assets/img/popup_save.svg"; // 다른 곳에서 전달받은 이미지 경로

    return (
       <PopUp 
        imgSrc={imgSrc}
        text1={"경험 기록이 저장되었습니다."} 
        text2={"이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!"}
        />
        
       //<ModalSheet title={"경험 작성하기"} isTemplate={true}/>
    );
}

export default TestPage;