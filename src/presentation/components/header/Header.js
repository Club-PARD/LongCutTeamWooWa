import React, { useState } from "react";
import styled from 'styled-components';
import DateSelector from "../DateSelector";
import { DataInputProvider } from "../../../service/providers/data_input_provider";

const HeaderContainer = styled.div`
  padding-top: 100px;
  padding-left: 300px;
`;

const Timeline = styled.div`
  font-family: Mont;
  font-weight: ${props => props.theme.fontWeights.heavy};
  font-size: ${props => props.theme.fontSizes.Header5};
  color: ${props => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 38px;
  border: none;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 0px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.active ? props.theme.color.primary300 : props.theme.color.blackMedium};
  font-weight: ${props => props.active ? props.theme.fontWeights.bold : props.theme.fontWeights.normal};
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: visible;

  &:hover {
    color: ${props => props.active ? props.theme.color.primary300 : props.theme.color.primary300};
  }
`;

const ButtonIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: ${props => props.theme.color.primary300};
  transform: scaleX(${props => props.active ? 1 : 0});
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
`;

const CustomDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #EAEAEA;
  margin: 0 10px;
  
  align-self: center;
`;


const Divider = styled.div`
  height: 1px;
  background-color: #EAEAEA;
  top: 0;
  width: 100%;
  margin-top: 0px;
  padding-top: 0px;
`;


function Header() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <DataInputProvider>
      <HeaderContainer>
        <Timeline>Timeline</Timeline>
        <ButtonContainer>
          <Button active={activeButton === 1} onClick={() => handleButtonClick(1)}>
            1주일
            <ButtonIndicator active={activeButton === 1} />
          </Button>
          <Button active={activeButton === 2} onClick={() => handleButtonClick(2)}>
            7주일
            <ButtonIndicator active={activeButton === 2} />
          </Button>
          <Button active={activeButton === 3} onClick={() => handleButtonClick(3)}>
            7개월
            <ButtonIndicator active={activeButton === 3} />
          </Button>
          <Button active={activeButton === 4} onClick={() => handleButtonClick(4)}>
            전체
            <ButtonIndicator active={activeButton === 4} />
          </Button>
          <Button active={activeButton === 5} onClick={() => handleButtonClick(5)}>
            처음으로
            <ButtonIndicator active={activeButton === 5} />
          </Button>

          <CustomDivider />

          <DateSelector />
        </ButtonContainer>
        <Divider />
      </HeaderContainer>
    </DataInputProvider>
  );
}

export default Header;
