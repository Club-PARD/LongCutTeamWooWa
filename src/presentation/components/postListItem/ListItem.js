import React, { useState } from "react";
import styled from "styled-components";
import Icon_checkDefault from "../../../assets/img/Icon_checkDefault.svg";
import Icon_checked from "../../../assets/img/Icon_checked.svg";

const ListItemContainer = styled.div`
  width: 550px;
  height: 105px;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

const CheckboxIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.color.blackHigh};
  margin-left: 14px;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const Date = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: var(--disabled-1, #ababab);
  margin-top: auto;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 230px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--disabled-1, #ababab);
  margin-left: 10px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.surface};
  border-radius: 10px;
  border: 1px solid var(--disabled-1, #ababab);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const DropdownArrow = styled.span`
  margin-left: auto;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.color.surface};
  width: 230px;
  border-radius: 10px;
  border: 1px solid var(--disabled-1, #ababab);
  background: var(--surface-white, #fff);
  padding: 5px;
  display: ${(props) => (props.isOpen ? "block" : "none")}; // 수정된 부분
`;


const TagLabel = styled.span`
  margin-right: 5px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  font-weight: 450;
  color: var(--disabled-1, #ababab);
`;

const TagListTitle = styled.h4`
  font-size: 10px;
  font-weight: 450;
  color: var(--disabled-1, #ababab);
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 8px;
`;

const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2px;
  margin-top: 5px;
  padding-top: 0px;
`;

const TagItem = styled.div`
  border: 1px solid ${(props) => props.backgroundColor};
  background-color: ${(props) =>
    props.isSelected ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : props.backgroundColor)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const CheckIconContainer = styled.div`
  position: absolute;
  left: -37px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckIcon = styled.img`
  width: 100%;
  height: 100%;
`;

function ListItem({ item, data, onItemSelect, isSelected }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTagClick = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagId));
    } else {
      if (selectedTags.length < 2) {
        setSelectedTags([...selectedTags, tagId]);
      }
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  

  return (
    <ListItemContainer>
      <CheckIconContainer onClick={() => onItemSelect(item.id, !isSelected)}>
        <CheckIcon
          src={isSelected ? Icon_checked : Icon_checkDefault}
          alt="Check Icon"
        />
      </CheckIconContainer>
      <TitleDateContainer>
        <Title>{item.title}</Title>
        <Date>{item.date}</Date>
      </TitleDateContainer>
      <TagContainer>
        <DropdownContainer>
          <DropdownButton onClick={handleDropdownToggle}>
            <TagLabel>태그 : </TagLabel>
            {selectedTags.length > 0 && (
              <TagListContainer>
                {data.tags.map((tag) => (
                  <TagItem
                    key={tag.id}
                    isSelected={selectedTags.includes(tag.id)}
                    backgroundColor={tag.color}
                    onClick={() => handleTagClick(tag.id)}
                  >
                    {tag.name}
                  </TagItem>
                ))}
              </TagListContainer>
            )}
            <DropdownArrow>▼</DropdownArrow>
          </DropdownButton>
          {selectedTags.length > 0 && (
            <DropdownContent isOpen={isDropdownOpen}>
              <TagListTitle>태그선택</TagListTitle>
              <TagListContainer>
                {data.tags.map((tag) => (
                  <TagItem
                    key={tag.id}
                    isSelected={selectedTags.includes(tag.id)}
                    backgroundColor={tag.color}
                    onClick={() => handleTagClick(tag.id)}
                  >
                    {tag.name}
                  </TagItem>
                ))}
              </TagListContainer>
            </DropdownContent>
          )}
        </DropdownContainer>
      </TagContainer>
    </ListItemContainer>
  );
}

export default ListItem;
