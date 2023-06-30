import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  width: 100%;
  height: 450px;
  overflow: auto;
  background-color: gray;
`;

function ListContainer({ data }) {
  return (
    <Container>
      {data.items.map((item) => (
        <ListItem key={item.id} item={item} data={data} />
      ))}
    </Container>
  );
}

export default ListContainer;
