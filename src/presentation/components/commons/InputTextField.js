import styled from "styled-components";
import React from 'react';

const Input = styled.input`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize}px;
  line-height: 38px;
  color: #222222;
  opacity: 0.5;
  border: none;
  outline: none;
`;

const InputTextField = ({ placeholder, fontsize }) => {
  return <Input type="text" placeholder={placeholder} fontSize={fontsize} />;
}

export default InputTextField;
