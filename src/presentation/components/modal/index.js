import "./ModalLayout.css"
import React from "react";
import ModalSheet from "./ModalSheet";
import ModalView from "./ModalView";

const ModalSheetBuilder = ({modalType}) => {
    
    if(modalType === "post"){
        return (<ModalView/>);
    }
    return (
        <ModalSheet modalType={modalType}/>
    );
}

export default ModalSheetBuilder;