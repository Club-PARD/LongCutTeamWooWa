import "./ModalLayout.css"
import React from 'react';

import {Divider, DashedDivider} from "../commons/Divider";
import ModalHeader from "./ModalSheetHeader";
import VerticalSpacing from "../commons/VerticalSpacing";

const ModalContainer = ({title, children}) => {
    return (
        <div className="modal-sheet">
            <ModalHeader title={title}/>
            <DashedDivider dashSize={"2px"}/>
            <VerticalSpacing height={25}/>
            {children}
        </div>
    );
}

export default ModalContainer;