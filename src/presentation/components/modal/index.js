import "./ModalLayout.css"
import React from "react";
import ModalSheet from "./ModalSheet";
import ModalView from "./ModalView";
import { DataInputProvider } from "../../../service/providers/data_input_provider";

const ModalSheetBuilder = ({modalType}) => {
    
    if(modalType === "post"){
        return (<ModalView/>);
    }
    return (
        <DataInputProvider>
            <ModalSheet modalType={modalType}/>
        </DataInputProvider>
    );
}

export default ModalSheetBuilder;