import ModalTag from "./ModalTag";

import "./ModalStyle.css";

const ModalTagSelection = ({modalTagList, width}) => {
    return (
        <div className="tag-chips" style={{width: `${width}px`}}>
            {modalTagList.map((tag, index) => (
                <ModalTag text={tag}/>
            ))}
        </div>
    );
}

export default ModalTagSelection;