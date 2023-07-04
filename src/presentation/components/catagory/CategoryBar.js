import React from "react";
import HashTagSelection from "./HashTagSelection";
import { styled } from "styled-components";
import CategoryTagSelection from "./CategoryTagSelection";

const tags = [
  { tagName: "인사이트", color: "#4386F7" },
  { tagName: "여행", color: "#F0935F" },
  { tagName: "친구", color: "#90BC77" },
  { tagName: "업무", color: "#77BCAB" },
  { tagName: "학업", color: "#F673A2" },
  { tagName: "회고", color: "#ED735D" },
  { tagName: "연애", color: "#8560F6" },
  { tagName: "추억", color: "#FFCF55" },
  { tagName: "기타", color: "#4386F7" },
];

const hashs = [
  { hashName: "디스콰이엇", color: "#8560F6" },
  { hashName: "네이버 블로그", color: "#90BC77" },
  { hashName: "브런치", color: "#4386F7" },
];

const Div = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 77px;
  padding-right: 23px;
  border-right: 1px solid #ccc;
  width: 170px;
  height: 90%;
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
