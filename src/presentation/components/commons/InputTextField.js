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

const InputTextField = ({onChange, placeholder, fontsize }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value); // Invoke the onChange callback with the input value
  };
  return <Input type="text" placeholder={placeholder} fontSize={fontsize} onChange={handleChange} />;
}

export default InputTextField;
