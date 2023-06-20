import ModalSheet from "./presentation/components/modal/ModalSheet";
import React from "react";
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