import React, { useState } from "react";
import styled from "styled-components";
import DateSelector from "../DateSelector";
import {
  DataInputProvider,
  useDataInput,
  useUpdateDataInput,
} from "../../../service/providers/data_input_provider";
import AddExperienceIcon from "../../../assets/img/AddExperienceIcon.svg";
import AddLinkIcon from "../../../assets/img/AddLinkIcon.svg";
import ModalSheetBuilder from "../modal";
import { useUpdateTimelineData } from "../../../service/providers/timeline_data_provider";
import { is } from "@react-spring/shared";

const HeaderContainer = styled.div`
  padding-top: 100px;

  margin-left: 61px;
`;

const Timeline = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.Header4};
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
      : props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Subtitle1};
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

const SelectDateText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Subtitle1};
  color: ${(props) => props.theme.color.primary300};
  margin-top : 21px;
  margin-left : 10px;
`

const CustomDivider = styled.div`
  width: 2px;
  height: 30px;
  background-color: #eaeaea;
  margin: 0 10px;
  margin-right : 30px;

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
const periodOption = {
  day: {
    displayName: "일",
    activationIndex: 1,
  },
  week: {
    displayName: "주",
    activationIndex: 2,
  },
  month: {
    displayName: "월",
    activationIndex: 3,
  },
  year: {
    displayName: "년",
    activationIndex: 4,
  },
};

function Header() {
  const [activeButton, setActiveButton] = useState(1);
  const updateDataInput = useUpdateTimelineData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add-free");
  
  const handleSetModalType = () => {
    if (modalType === "add-free") {
      setModalType("add-template");
    } else {
      setModalType("add-free");
    }
  };

  const ResetModalType = () => {
    setModalType("add-free");
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
    ResetModalType();
  };
  const handleTimelineDataChange = (name, value) => {
    updateDataInput(name, value);
  };

  const handleButtonClick = (key, value) => {
    setActiveButton(value.activationIndex);
    handleTimelineDataChange("grouping", key);
  };

  return (
    <DataInputProvider>
      <HeaderContainer>
        <Timeline>Timeline</Timeline>
        <Container>
          <ButtonContainer>
            {Object.entries(periodOption).map(([key, value]) => (
              <Button
                key={key}
                active={activeButton === value.activationIndex}
                onClick={() => handleButtonClick(key, value)}
              >
                {value.displayName}
                <ButtonIndicator
                  active={activeButton === value.activationIndex}
                />
              </Button>
            ))}
            <CustomDivider />
            <Button
              active={activeButton === 5}
              onClick={() => handleButtonClick(5)}
            >
              전체
              <ButtonIndicator active={activeButton === 5} />
            </Button>

            {/* <CustomDivider /> */}
            <SelectDateText>
              날짜이동
            </SelectDateText>
            <DateSelector />
          </ButtonContainer>
          <ButtonContainer2>
            <AddLinkButton>
              <AddLinkIconImg src={AddLinkIcon} />
              링크 추가하기
            </AddLinkButton>
            <AddExperience onClick={handleModalOpen}>
              <AddExperienceIconImg src={AddExperienceIcon} />
              경험 추가하기
            </AddExperience>
          </ButtonContainer2>
        </Container>
        <Divider />

      </HeaderContainer>
      <ModalSheetBuilder
        modalType={modalType}
        handleSetModalType={handleSetModalType}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </DataInputProvider>
  );
}

export default Header;
