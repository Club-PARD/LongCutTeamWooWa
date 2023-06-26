import React, { useState } from "react";
import styled from "styled-components";

const StyledTag = styled.div`
  background-color: ${(props) => (props.isClicked ? "#ff0000" : "transparent")};
  cursor: pointer;
  color: ${(props) => props.tag.color};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
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
      {tag.tagName}
    </StyledTag>
  );
};

export default ModalTag;
