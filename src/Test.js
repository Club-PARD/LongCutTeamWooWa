import ModalSheet from "./presentation/components/modal/ModalSheet";
import React from "react";
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
    );
}

export default TestPage;