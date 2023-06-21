import "./ModalLayout.css"
import React from 'react';

import {Divider, DashedDivider} from "../commons/Divider";
import ModalHeader from "./ModalSheetHeader";
import VerticalSpacing from "../commons/VerticalSpacing";
import ModalTagSelection from "./ModalTagSelection";
import InputTitle from "./InputTitle";
import DateSelector from "../DateSelector";
const tags = ['도전정신', '성취감', '동기부여', '학습', '자기존중', '문제 해결 능력', '협업', '리더십', '커뮤니케이션', '신체적', '정서적'];

const ModalSheet = ({title, children, hasTitleInput, hasDatePicker, hasTagSelection, Button}) => {
    return (
        <div className="modal-sheet">
            <ModalHeader title={title}/>
            <Divider/>
            <VerticalSpacing height={25}/>
            {hasTitleInput ? 
                <>
                    <InputTitle/> 
                    <VerticalSpacing height={13.9}/>
                </> : 
                <></>
            }
            {children}
            {hasDatePicker ? 
                <>
                    <Divider/>
                    <VerticalSpacing height={14}/>
                    <DateSelector onChange={() => {}}/> 
                    <VerticalSpacing height={14}/>
                </> : 
                <></>
            }
            {hasTagSelection != null ? 
                <>
                    <Divider/>
                    <VerticalSpacing height={14}/>
                    <ModalTagSelection title={"태그 입력"} hasButton={true} modalTagList={tags} onClick={hasTagSelection}/> 
                    <VerticalSpacing height={14}/>
                    <Divider/>
                </> : 
                <></>
            }
            {Button != null ? 
                <>
                    <VerticalSpacing height={26.5}/>
                    <div className="button-layout">
                        {Button}
                    </div> 
                </>: 
                <></>}
        </div>
    );
}

export default ModalSheet;