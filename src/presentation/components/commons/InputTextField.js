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

const InputTextField = ({ placeholder, fontsize }) => {
  return <Input type="text" placeholder={placeholder} fontSize={fontsize} />;
}

export default InputTextField;
