import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import Icon_checkDefault from "../../../assets/img/Icon_checkDefault.svg";
import Icon_checked from "../../../assets/img/Icon_checked.svg";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;
  background-color: white;
`;

const SelectAllButton = styled.button`
  margin-left : 18px; 
  margin-bottom: 10px;
  background: transparent;
  border: none;
  color: var(--primary-300, #11E3B2);
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 160%;
  cursor: pointer; 
`;


function ListContainer({ data, setSelectedTags, selectedTags }) {
  const [selectedItems, setSelectedItems] = useState([]);
//   const [selectAllIcon, setSelectAllIcon] = useState(Icon_checkDefault);

  const handleSelectAll = () => {
    if (selectedItems.length === data.items.length) {
      setSelectedItems([]);
    //   setSelectAllIcon(Icon_checkDefault);
    } else {
      const itemIds = data.items.map((item) => item.id);
      setSelectedItems(itemIds);
    //   setSelectAllIcon(Icon_checked);
    }
  };

  const handleItemSelect = (itemId, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  console.log(data);

  return (
    <>
    <SelectAllButton onClick={handleSelectAll}>
        {/* <SelectAllIcon src={selectAllIcon} alt="Check Icon" /> */}
        {selectedItems.length === data.items.length ? "전체해제" : "전체선택"}
      </SelectAllButton>
    <Container>
      
      {data.items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          data={data}
          setSelectedTags ={setSelectedTags}
          selectedTags={selectedTags}
          onItemSelect={handleItemSelect}
          isSelected={selectedItems.includes(item.id)}
        />
      ))}
    </Container>
    </>
  );
}

export default ListContainer;
