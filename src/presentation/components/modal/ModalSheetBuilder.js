import "./ModalLayout.css"
import React from 'react';
import SubmitBtn from "../buttons/SubmitBtn";
import ModalTemplateContent from "./ModalTemplateContent";
import ModalWritingContent from "./ModalWritingContent";
import LinkBox from "./LinkBox";
import ModalSheet from "./ModalSheet";
import ModalView from "./ModalView";


const modalTypeInfo = {
    "add-link" : {
        "title" : "링크 추가하기",
        "hasTitleInput" : false,
        "children" : <LinkBox/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"}/>
    },
    "add-free" : {
        "title" : "경험 작성하기",
        "hasTitleInput" : true,
        "children" : <ModalWritingContent/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"}/>
    },
    "add-template" : {
        "title" : "경험 작성하기",
        "hasTitleInput" : true,
        "children" : <ModalTemplateContent/>,
        "hasDatePicker" : true,
        "hasTagSelection" : true,
        "Button" : <SubmitBtn buttonText={"기록하기"}/>
    },
    "post" : {
        "title" : "경험 제목",
        "hasTitleInput" : false,
        "hasDatePicker" : false,
        "hasTagSelection" : false,
        "Button" : <SubmitBtn buttonText={"수정하기"}/>
    },
}

const ModalSheetBuilder = ({modalType}) => {
    const data = modalTypeInfo[modalType];
    if(data === null) return <></>
    if(modalType === "post"){
        return (<ModalView/>);
    }
    return (
        <ModalSheet title={data["title"]} 
                    hasTitleInput={data["hasTitleInput"]} 
                    children={data["children"]}
                    hasDatePicker={data["hasDatePicker"]}
                    hasTagSelection={data["hasTagSelection"]} 
                    Button={data["Button"]}
                    />
    );
}

export default ModalSheetBuilder;