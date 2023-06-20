import "./ModalLayout.css"
import React from 'react';

import {Divider, DashedDivider} from "../Divider";
import ModalButtons from "./ModalButtons";
import ModalTagSelection from "./ModalTagSelection";
import ModalHeader from "./ModalSheetHeader";
import InputTitle from "./InputTitle";
import VerticalSpacing from "../VerticalSpacing";
import ModalWritingContent from "./ModalWritingContent";
import ModalTemplateContent from "./ModalTemplateContent";
import SingleScrollView from "../SingleScrollView";
const tags = ['도전정신', '성취감', '동기부여', '학습', '자기존중', '문제 해결 능력', '협업', '리더십', '커뮤니케이션', '신체적', '정서적'];

const ModalSheet = ({title, isTemplate}) => {
    return (
        <div className="modal-sheet">
            <ModalHeader title={title}/>
            <Divider/>
            <VerticalSpacing height={25}/>
            <InputTitle/>
            <VerticalSpacing height={13.9}/>
            <DashedDivider/>
            <VerticalSpacing height={21}/>
            <SingleScrollView children={isTemplate ? 
                <ModalTemplateContent/> : 
                <ModalWritingContent/>}/>
            <VerticalSpacing height={19}/>
            <Divider/>
            <VerticalSpacing height={14}/>
            <ModalTagSelection title={"태그 입력"} modalTagList={tags} hasButton={true}/>
            <VerticalSpacing height={14}/>
            <Divider/>
            <VerticalSpacing height={26.5}/>
            <div className="button-layout">
                <ModalButtons/>
            </div>
            
        </div>
    );
}

export default ModalSheet;