import React, { useState } from "react";
import styled from 'styled-components';
import { Divider, DashedDivider } from "../commons/Divider";

const HeaderContainer = styled.div`
    padding-top: 100px; 
    padding-left: 300px;
    // background-color: ${props => props.theme.color.background};
`;

const Timeline = styled.div`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.Header4};
  color: ${props => props.theme.color.blackHigh};
  font-style: normal;  
  line-height: 38px;
  border: none;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;  
  padding-bottom: 20px;  
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
`;

const DividerVertical = styled.div`
  width: 1px;
  height: 30px;
  background-color: #D7D7D7;
  margin: 0 10px;
`;

function Header() {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
      setActiveButton(buttonNumber);
    };

    return (
        <HeaderContainer>
            <Timeline>
                Timeline
            </Timeline>
            <ButtonContainer>
                <Button active={activeButton === 1} onClick={() => handleButtonClick(1)}>1주일</Button>
                <Button active={activeButton === 2} onClick={() => handleButtonClick(2)}>7주일</Button>
                <Button active={activeButton === 3} onClick={() => handleButtonClick(3)}>7개월</Button>
                <Button active={activeButton === 4} onClick={() => handleButtonClick(4)}>전체</Button>
                <Button active={activeButton === 5} onClick={() => handleButtonClick(5)}>처음으로</Button>
                <DividerVertical />
            </ButtonContainer>
            <Divider/>
        </HeaderContainer>
    );
}

export default Header;
