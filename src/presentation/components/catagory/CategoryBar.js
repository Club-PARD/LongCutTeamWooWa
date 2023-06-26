import React from "react";
import { Divider } from "../commons/Divider";
import VerticalSpacing from "../commons/VerticalSpacing";
import CategoryTagSelection from "./CategoryTagSelection";


const tags = [
  { tagName: "도전정신", color: "#4386F7" },
  { tagName: "성취감", color: "#F0935F" },
  { tagName: "동기부여", color: "#90BC77" },
  { tagName: "학습", color: "#77BCAB" },
  { tagName: "자기존중", color: "#ED735D" },
  { tagName: "문제 해결 능력", color: "#F673A2" },
  { tagName: "협업", color: "#ED735D" },
  { tagName: "리더십", color: "#8560F6" },
  { tagName: "커뮤니케이션", color: "#FFCF55" },
  { tagName: "신체적", color: "#4386F7" },
];

const CategoryBar = () => {
  return (
    <div>
      <VerticalSpacing height={25} />
      <Divider />
      <VerticalSpacing height={14} />
      <CategoryTagSelection title={"Category"} categoryTagList={tags} />
      <VerticalSpacing height={14} />
      <Divider />
    </div>
  );
};

export default CategoryBar;
