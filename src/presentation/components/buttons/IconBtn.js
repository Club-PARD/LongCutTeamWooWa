import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Icon = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const IconButton = ({ iconImage, onClick, size }) => {
  return (
    <Button onClick={onClick}>
      <Icon src={iconImage} alt="Icon" size={size} />
    </Button>
  );
};

export default IconButton;
