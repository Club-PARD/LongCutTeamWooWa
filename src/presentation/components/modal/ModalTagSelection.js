import ModalTag from "./ModalTag";
import { FiPlus } from 'react-icons/fi';

import "./ModalStyle.css";
import React from "react";
const ModalTagSelection = ({title, modalTagList, width, hasButton}) => {
    return (
        <div className="tag-chips-container">
            {title != null ? 
                <div className="chip-title">
                    {title}
                </div> : 
                <></>}
            <div className="tag-chips" style={{width: width != null ? `${width}px` : "100%"}}>
                {modalTagList.map((tag, index) => (
                    <ModalTag key={index} text={tag}/>
                ))}
                {hasButton ? 
                    <button className="add-button">
                        <FiPlus />
                    </button> : 
                    <></>
                }
            </div>
        </div>
    );
}

export default ModalTagSelection;