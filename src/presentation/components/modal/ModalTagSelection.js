import ModalTag from "./ModalTag";
import { FiPlus } from 'react-icons/fi';

import "./ModalStyle.css";
import React, { useState } from "react";

const ModalTagSelection = ({ title, modalTagList, width, hasButton, onChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    const isTagSelected = selectedTags.includes(tag);
    let updatedTags;
  
    if (isTagSelected) {
      updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }
  
    setSelectedTags(updatedTags);
    onChange(updatedTags); // Pass the updatedTags directly to the onChange callback
  };

  const handleAddButtonClick = () => {
    // Handle add button click event
    console.log("Add button clicked");
    // You can perform any desired actions when the add button is clicked
  };

  return (
    <div className="tag-chips-container">
      {title != null ? (
        <div className="chip-title">{title}</div>
      ) : (
        <></>
      )}
      <div className="tag-chips" style={{ width: width != null ? `${width}px` : "100%" }}>
        {modalTagList.map((tag, index) => (
          <ModalTag
            key={index}
            text={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => {
                handleTagClick(tag)
            }}
          />
        ))}
        {hasButton ? (
          <button className="add-button" onClick={handleAddButtonClick}>
            <FiPlus />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ModalTagSelection;
