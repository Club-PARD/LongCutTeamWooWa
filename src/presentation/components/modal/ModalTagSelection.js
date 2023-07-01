import ModalTag from "./ModalTag";
import "./ModalStyle.css";
import React, { useState } from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";

const ModalTagSelection = ({ title, modalTagList, width, hasButton }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };

  const handleTagClick = (tag) => {
    const isTagSelected = selectedTags.includes(tag);
    let updatedTags;

    if (isTagSelected) {
      updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }

    setSelectedTags(updatedTags);
    handleInputChange("selected-tags", updatedTags);
  };

 
  return (
    <div className="tag-chips-container">
      {title != null ? <div className="chip-title">{title}</div> : <></>}
      <div
        className="tag-chips"
        style={{ width: width != null ? `${width}px` : "100%" }}
      >
        {modalTagList.map((tag, index) => (
          <ModalTag
            key={index}
            tag={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => {
              handleTagClick(tag);
            }}
          />
        ))}
        {/* {hasButton ? (
          <button className="add-button" onClick={handleAddButtonClick}>
            <FiPlus />
          </button>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default ModalTagSelection;