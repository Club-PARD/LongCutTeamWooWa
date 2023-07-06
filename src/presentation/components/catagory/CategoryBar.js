import React from "react";
import HashTagSelection from "./HashTagSelection";
import { styled } from "styled-components";
import CategoryTagSelection from "./CategoryTagSelection";
import { tags, hashs } from "../../../constants/tags";


const Div = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 77px;
  padding-right: 23px;
  border-right: 1px solid #ccc;
  width: 170px;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 80px;
  margin-top: 20px;
`;

const CategoryBar = () => {
  return (
    <Div>
      <CategoryTagSelection title={"Category"} categoryTagList={tags} />
      <HashTagSelection hashTagList={hashs} />
    </Div>
  );
};

export default CategoryBar;
