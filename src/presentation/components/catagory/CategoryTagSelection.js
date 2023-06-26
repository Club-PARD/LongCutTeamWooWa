import CategoryTag from "./CategoryTag";
import "../modal/ModalStyle.css";
import React, { useState } from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";

const CategoryTagSelection = ({ title, categoryTagList, width }) => {
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
        {categoryTagList.map((tag, index) => (
          <CategoryTag
            key={index}
            tag={tag}
            onClick={() => {
              handleTagClick(tag);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTagSelection;
