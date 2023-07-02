import CategoryTag from "./CategoryTag";
import React, { useState } from "react";
import { styled } from "styled-components";
import gearImg from "../../../assets/img/gear.svg";
import { useUpdateTimelineData } from "../../../service/providers/timeline_data_provider";

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
  align-items: flex-start;

`;

const TitleDiv = styled.div`
  color: var(--black-high, #272727);
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: 23px; 
  line-height: 160%;
  margin-bottom: 10px;
`;

// const GearImg = styled.img`
//   width: 16px;
// `;

const EditButton = styled.button`
  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  // justify-content: center;
  // color: var(--black-medium, #7a7a7a);
  // font-size: 12px;
  // font-family: ${(props) => props.theme.fontFamily.mainfont};
  // line-height: 160%;
  // margin-top: 10px;

  background-color: transparent;
  border: none;
  margin-bottom: 10px;
`;

const CategoryTagSelection = ({ title, categoryTagList, width }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const updateDataInput = useUpdateTimelineData();
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
    <BarDiv>
      <TitleDiv>{title}</TitleDiv>
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
      <EditButton>
        {/* <GearImg src={gearImg} />
        &nbsp;카테고리 수정 */}
      </EditButton>
    </BarDiv>
  );
};

export default CategoryTagSelection;
