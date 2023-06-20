import "./ModalLayout.css"
import React from 'react';

import {Divider, DashedDivider} from "../Divider";
import ModalHeader from "./ModalSheetHeader";
import VerticalSpacing from "../VerticalSpacing";
const tags = ['도전정신', '성취감', '동기부여', '학습', '자기존중', '문제 해결 능력', '협업', '리더십', '커뮤니케이션', '신체적', '정서적'];

const ModalContainer = ({title, children}) => {
    return (
        <div className="modal-sheet">
            <ModalHeader title={title}/>
            <Divider/>
            <VerticalSpacing height={25}/>
            {children}
        </div>
    );
}

export default ModalContainer;