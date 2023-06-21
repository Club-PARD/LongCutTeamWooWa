import styled from "styled-components";
import React from 'react';

const TextArea = styled.textarea`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize}px;
  line-height: 38px;
  color: #222222;
  opacity: 0.5;
  border: none;
  outline: none;
  resize: vertical;
  overflow: hidden;
`;

const InputTextArea = ({ placeholder, fontsize }) => {
  const handleInputHeight = event => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
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
