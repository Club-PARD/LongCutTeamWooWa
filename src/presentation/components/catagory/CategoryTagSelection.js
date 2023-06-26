import CategoryTag from "./CategoryTag";
import "../modal/ModalStyle.css";
import React, { useState } from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
import { styled } from "styled-components";

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: flex-start;
  & > * + * {
    margin-top: 10px;
  }
`;

const BarDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 100px;
  margin-left: 77px;
  align-items: flex-start;
`;


const TitleDiv = styled.div`
  color: var(--black-high, #272727);
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.Body1};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 160%;
  margin-bottom: 29px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ccc;
  margin-bottom: 10px;
`;

const CategoryTagSelection = ({ title, categoryTagList, width }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isTagClicked, setIsTagClicked] = useState(false);
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
    setIsTagClicked(true);
  };

  return (
    <BarDiv>
      {title != null ? <TitleDiv>{title}</TitleDiv> : null}
      {isTagClicked ? <Divider /> : null}
      <TagDiv>
        {categoryTagList.map((tag, index) => (
          <CategoryTag
            key={index}
            tag={tag}
            onClick={() => {
              handleTagClick(tag);
            }}
          />
        ))}
      </TagDiv>
    </BarDiv>
  );
};

export default CategoryTagSelection;
