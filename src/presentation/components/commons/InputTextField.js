import styled from "styled-components";
import React from 'react';

const Input = styled.input`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Header5};
  color: ${props => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 38px;
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
