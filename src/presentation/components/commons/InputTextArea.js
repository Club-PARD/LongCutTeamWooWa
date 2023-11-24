import styled from "styled-components";
import React from "react";

const TextArea = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.body1};
  color: ${(props) => props.theme.color.blackHigh};
  line-height: 38px;
  border: none;
  outline: none;
  resize: vertical;
  padding-right: 10px;

  scrollbar-width: thin;
  scrollbar-color: lightGray transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, lightGray, darkGray);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, darkGray, #000000);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
  /* overflow: hidden; 스크롤 가능하게 하려면 주석처리 해야함 */
`;

const InputTextArea = ({ placeholder, fontsize, onChange }) => {
  const handleInputHeight = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    const { value } = event.target;
    onChange(value);
  };

  return (
    <TextArea
      placeholder={placeholder}
      fontSize={fontsize}
      onInput={handleInputHeight}
    />
  );
};

export default InputTextArea;
