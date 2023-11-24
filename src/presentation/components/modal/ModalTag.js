import React, { useState } from "react";
import { styled, css } from "styled-components";
import { LiaCheckSolid } from "react-icons/lia";
import { useDataInput } from "../../../service/providers/data_input_provider";

const CheckIcon = styled(LiaCheckSolid)`
  fill: ${(props) => props.tag.color};
  margin-right: 7px;
  margin-bottom: -2px;
`;

const StyledTag = styled.div`
  background-color: ${(props) =>
    props.isClicked ? `${props.tag.color}26` : "transparent"};
  cursor: pointer;
  color: ${(props) => props.tag.color};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  font-weight: ${(props) =>
    props.isClicked
      ? `${props.theme.fontWeights.bold}`
      : `${props.theme.fontWeights.semibold}`};
  border: 1px solid ${(props) => props.tag.color};
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
`;

const ModalTag = ({ tag, onClick }) => {
  const dataInput = useDataInput();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (
      dataInput["selected-tags"] &&
      Object.entries(dataInput["selected-tags"]).length >= 2
    ) {
      if (isClicked) {
        setIsClicked(false);
      } else {
        return; // 이미 선택된 태그의 개수가 2보다 크면 클릭 이벤트 처리하지 않음
      }
    }
    onClick(tag);
    setIsClicked(!isClicked);
  };

  return (
    <StyledTag tag={tag} isClicked={isClicked} onClick={handleClick}>
      {isClicked && <CheckIcon tag={tag} />}
      {tag.tagName}
    </StyledTag>
  );
};

export default ModalTag;
