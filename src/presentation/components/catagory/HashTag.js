import React, { useState } from "react";
import { styled } from "styled-components";

const StyledHash = styled.div`
  background-color: ${(props) =>
    props.isClicked ? `${props.hash.color}26` : props.isHovered ? "rgba(39, 39, 39, 0.15)" : "transparent"};
  cursor: pointer;
  color: ${(props) => props.hash.color};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  font-weight: ${(props) =>
    props.isClicked
      ? `${props.theme.fontWeights.bold}`
      : `${props.theme.fontWeights.semibold}`};
  border: "transparent";
  display: inline-block;
  padding: 4px 12px;
  border-radius: 5px;
`;

const HashTag = ({ hash, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick(hash);
    setIsClicked(!isClicked);
  };

  return (
    <StyledHash
      hash={hash}
      isClicked={isClicked}
      isHovered={isHovered}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      #{hash.hashName}
    </StyledHash>
  );
};

export default HashTag;
