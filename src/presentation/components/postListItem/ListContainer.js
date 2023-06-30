import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  width: 100%;
  height: 450px;
  overflow: auto;
  background-color: gray;
`;

const SelectAllButton = styled.button`
  margin-bottom: 10px;
`;

function ListContainer({ data }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    if (selectedItems.length === data.items.length) {
      setSelectedItems([]);
    } else {
      const itemIds = data.items.map((item) => item.id);
      setSelectedItems(itemIds);
    }
  };

  const handleItemSelect = (itemId, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  return (
    <Container>
      <SelectAllButton onClick={handleSelectAll}>
        {selectedItems.length === data.items.length ? "전체해제" : "전체선택"}
      </SelectAllButton>
      {data.items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          data={data}
          onItemSelect={handleItemSelect}
        />
      ))}
    </Container>
  );
}

export default ListContainer;
