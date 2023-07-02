import React from "react";
import HashTagSelection from "./HashTagSelection";
import { styled } from "styled-components";
import CategoryTagSelection from "./CategoryTagSelection";

const tags = [
  { tagName: "도전정신", color: "#4386F7" },
  { tagName: "성취감", color: "#F0935F" },
  { tagName: "동기부여", color: "#90BC77" },
  { tagName: "학습", color: "#77BCAB" },
  // { tagName: "자기존중", color: "#ED735D" },
  { tagName: "문제 해결 능력", color: "#F673A2" },
  { tagName: "협업", color: "#ED735D" },
  { tagName: "리더십", color: "#8560F6" },
  { tagName: "커뮤니케이션", color: "#FFCF55" },
  // { tagName: "신체적", color: "#4386F7" },
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
  padding-top : 140px;
  padding-bottom : 80px;
  margin-top : 20px;
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
