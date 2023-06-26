import React, { useState } from "react";
import { styled, css } from "styled-components";
import { LiaCheckSolid } from "react-icons/lia";

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
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
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
