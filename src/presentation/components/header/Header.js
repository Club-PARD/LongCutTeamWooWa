import React, { useState } from "react";
import styled from "styled-components";
import DateSelector from "../DateSelector";
import { DataInputProvider } from "../../../service/providers/data_input_provider";
import AddExperienceIcon from "../../../assets/img/AddExperienceIcon.svg";
import AddLinkIcon from "../../../assets/img/AddLinkIcon.svg";
import ModalSheetBuilder from "../modal";

const HeaderContainer = styled.div`
  padding-top: 39px;
  padding-left: 43px;
`;

const Timeline = styled.div`
  font-family: Mont;
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.Header5};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 38px;
  border: none;
  outline: none;
`;

const Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 0px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0;
  padding-bottom: 0px;
`;
const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  // padding-top: 20px;
  padding-bottom: 0px;
  margin-right: 65px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 0px 15px;
  border-radius: 4px;
  background-color: transparent;
  color: ${(props) =>
    props.active ? props.theme.color.primary300 : props.theme.color.blackHigh};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) =>
    props.active
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: visible;

  &:hover {
    color: ${(props) =>
      props.active
        ? props.theme.color.primary300
        : props.theme.color.primary300};
  }
`;

const ButtonIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary300};
  transform: scaleX(${(props) => (props.active ? 1 : 0)});
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
`;

const CustomDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #eaeaea;
  margin: 0 10px;

  align-self: center;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eaeaea;
  top: 0;
  width: 100%;
  margin-top: 0px;
  padding-top: 0px;
`;

const AddLinkButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-top: 15px;
  padding: 8px 16px;
  border-radius: 40px;
  height: 31px;
  background-color: ${(props) => props.theme.color.primary300};
  color: ${(props) => props.theme.color.surface};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.primary400};
    color: ${(props) => props.theme.color.surface};
  }
`;

const AddLinkIconImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const AddExperience = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-top: 15px;
  padding: 8px 16px;
  border-radius: 40px;
  height: 31px;
  background-color: ${(props) => props.theme.color.primary300};
  color: ${(props) => props.theme.color.surface};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.primary400};
    color: ${(props) => props.theme.color.surface};
  }
`;

const AddExperienceIconImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

function Header() {
  const [activeButton, setActiveButton] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleAddExperienceClick = () => {
    setShowModal(true);
  };

  return (
    <DataInputProvider>
      <HeaderContainer>
        <Timeline>Timeline</Timeline>
        <Container>
          <ButtonContainer>
            <Button
              active={activeButton === 1}
              onClick={() => handleButtonClick(1)}
            >
              일
              <ButtonIndicator active={activeButton === 1} />
            </Button>
            <Button
              active={activeButton === 2}
              onClick={() => handleButtonClick(2)}
            >
              주
              <ButtonIndicator active={activeButton === 2} />
            </Button>
            <Button
              active={activeButton === 3}
              onClick={() => handleButtonClick(3)}
            >
              월
              <ButtonIndicator active={activeButton === 3} />
            </Button>
            <Button
              active={activeButton === 4}
              onClick={() => handleButtonClick(4)}
            >
              년
              <ButtonIndicator active={activeButton === 4} />
            </Button>
            <Button
              active={activeButton === 5}
              onClick={() => handleButtonClick(5)}
            >
              전체
              <ButtonIndicator active={activeButton === 5} />
            </Button>

            <CustomDivider />
            <DateSelector />
          </ButtonContainer>
          <ButtonContainer2>
            <AddLinkButton>
              <AddLinkIconImg src={AddLinkIcon} />
              <div styled={{display: "inline-block"}}>
                링크 추가하기
              </div>
              
            </AddLinkButton>
            <AddExperience onClick={handleAddExperienceClick}>
              <AddExperienceIconImg src={AddExperienceIcon} />
              <div styled={{display: "inline-block"}}>
              경험 추가하기
              </div>
              
            </AddExperience>
          </ButtonContainer2>
        </Container>
        <Divider />
      </HeaderContainer>
      <ModalSheetBuilder
        modalType={"add-free"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </DataInputProvider>
  );
}

export default Header;
