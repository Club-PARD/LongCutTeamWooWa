import styled from "styled-components";
import React from 'react';

const TextArea = styled.textarea`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.body1};
  color: ${props => props.theme.color.blackHigh};
  line-height: 38px;
  border: none;
  outline: none;
  resize: vertical;
  overflow: hidden;
`;

const InputTextArea = ({ placeholder, fontsize, onChange }) => {
  const handleInputHeight = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    const {value} = event.target;
    onChange(value);
  };

  return (
    <TextArea
      placeholder={placeholder}
      fontSize={fontsize}
      onInput={handleInputHeight}
    />
  );
}

export default InputTextArea;
