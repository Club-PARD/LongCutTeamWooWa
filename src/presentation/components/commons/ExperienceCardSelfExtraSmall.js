import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 30px;
  height: 15px;
  border-radius: 2.5px;
  display: flex;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 4px;
`;

const ColoredSection = styled.div`
  flex-grow: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-top-left-radius: ${(props) => props.isLeft ? "2px" : "0px"};
  border-bottom-left-radius: ${(props) => props.isLeft ? "2px" : "0px"};

  border-top-right-radius: ${(props) => props.isRight ? "2px" : "0px"};
  border-bottom-right-radius: ${(props) => props.isRight ? "2px" : "0px"};
`;

const ExperienceCardSelfExtraSmall = ({ data, isAbove }) => {
  const tags = data["selected-tags"];
  const numTags = tags.length;
  let sectionWidth;

  if (numTags === 0) {
    sectionWidth = 0;
  } else {
    sectionWidth = 1 / numTags;
  }

  return (
    <BoxContainer isAbove={isAbove}>
      {tags.map((tag, index) => (
        <ColoredSection
          isLeft={index === 0}
          isRight={index === tags.length-1}
          key={index}
          width={sectionWidth}
          color={tag.color}
        ></ColoredSection>
      ))}
    </BoxContainer>
  );
};

export default ExperienceCardSelfExtraSmall;
