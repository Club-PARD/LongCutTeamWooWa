import ModalTag from "./ModalTag";
import { FiPlus } from 'react-icons/fi';

import "./ModalStyle.css";

const ModalTagSelection = ({title, modalTagList, width}) => {
    return (
        <div className="tag-chips-container">
            <div className="chip-title">
                {title}
            </div>
            <div className="tag-chips" style={{width: `${width}px`}}>
                {modalTagList.map((tag, index) => (
                    <ModalTag text={tag}/>
                ))}
                <button className="add-button">
                    <FiPlus />
                </button>
            </div>
        </div>
    );
}

export default ModalTagSelection;