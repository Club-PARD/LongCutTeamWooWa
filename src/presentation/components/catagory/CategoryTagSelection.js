// import CategoryTag from "./CategoryTag";
// import "../modal/ModalStyle.css";
// import React, { useState } from "react";
// import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
// import { styled } from "styled-components";

// const TagDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 10px;
//   align-items: flex-start;
//   & > * + * {
//     margin-top: 10px;
//   }
// `;

// const BarDiv = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   flex-shrink: 0;
//   margin-top: 100px;
//   margin-left: 77px;
//   align-items: flex-start;
// `;

// const TitleDiv = styled.div`
//   color: var(--black-high, #272727);
//   text-align: center;
//   font-size: ${(props) => props.theme.fontSizes.Body1};
//   font-family: ${(props) => props.theme.fontFamily.mainfont};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   line-height: 160%;
//   margin-bottom: 29px;
// `;

// const Divider = styled.div`
//   height: 1px;
//   width: 100%;
//   background-color: #ccc;
//   margin-bottom: 10px;
// `;

// const CategoryTagSelection = ({ title, categoryTagList, width }) => {
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [unselectedTags, setUnselectedTags] = useState(categoryTagList);
//   const updateDataInput = useUpdateDataInput();
//   const handleInputChange = (name, value) => {
//     updateDataInput(name, value);
//   };

//   const handleTagClick = (tag) => {
//     const isTagSelected = selectedTags.includes(tag);
//     let updatedSelectedTags;
//     let updatedUnselectedTags;

//     if (isTagSelected) {
//       updatedSelectedTags = selectedTags.filter(
//         (selectedTag) => selectedTag !== tag
//       );
//       updatedUnselectedTags = [...unselectedTags, tag];
//     } else {
//       updatedSelectedTags = [...selectedTags, tag];
//       updatedUnselectedTags = unselectedTags.filter(
//         (unselectedTag) => unselectedTag !== tag
//       );
//     }

//     setSelectedTags(updatedSelectedTags);
//     setUnselectedTags(updatedUnselectedTags);
//     handleInputChange("selected-tags", updatedSelectedTags);
//   };

//   return (
//     <BarDiv>
//       <TitleDiv>{title}</TitleDiv>
//       {selectedTags.length > 0 && <Divider />}
//       <TagDiv>
//         {selectedTags.map((tag, index) => (
//           <CategoryTag
//             key={index}
//             tag={tag}
//             checked={true}
//             onClick={() => {
//               handleTagClick(tag);
//             }}
//           />
//         ))}
//         {selectedTags.length > 0 && <Divider />}
//         {unselectedTags.map((tag, index) => (
//           <CategoryTag
//             key={index}
//             tag={tag}
//             checked={false}
//             onClick={() => {
//               handleTagClick(tag);
//             }}
//           />
//         ))}
//       </TagDiv>
//     </BarDiv>
//   );
// };
// export default CategoryTagSelection;
////////////////////////////////////////////////////
import CategoryTag from "./CategoryTag";
import React, { useState } from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
import { styled } from "styled-components";
import gearImg from "../../../assets/img/gear.svg";

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

const GearImg = styled.img``;

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: var(--black-medium, #7a7a7a);
  font-size: 10px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  line-height: 160%;
  margin-top: 12px;
  margin-bottom: 12px;
`;

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
        <GearImg src={gearImg} />
        &nbsp;&nbsp;카테고리 수정
      </EditButton>
    </BarDiv>
  );
};

export default CategoryTagSelection;
