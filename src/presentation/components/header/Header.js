import React, { useState } from "react";
import styled, { css } from "styled-components";
import DateSelector from "../DateSelector";
import {
  DataInputProvider,
  useDataInput,
  useUpdateDataInput,
} from "../../../service/providers/data_input_provider";
import AddExperienceIcon from "../../../assets/img/AddExperienceIcon.svg";
import AddLinkIcon from "../../../assets/img/AddLinkIcon.svg";
import InfoIcon from "../../../assets/img/InfoIcon.svg";
import ModalSheetBuilder from "../modal";
import { useUpdateTimelineData } from "../../../service/providers/timeline_data_provider";
import { is } from "@react-spring/shared";

const HeaderContainer = styled.div`
  padding-top: 40px;
  position: relative; /* 추가된 부분 */
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
  padding-bottom: 0px;
`;

const TimeLineInfoBoxContainer = styled.div`
  display : flex; 
`;

const InformationBox = styled.div`
  width: 331px;
  height: 86px;
  flex-shrink: 0;
  border-radius: 15px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 10px; 
  background-color: ${(props) => props.theme.color.blackHigh};
  color: ${(props) => props.theme.color.surface};
  position: absolute;
  z-index: 10;
  margin-left : 100px; 
  top: 75px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50.1px;
    border-style: solid;
    border-width: 6px;
    border-color: transparent transparent ${(props) =>
      props.theme.color.blackHigh} transparent;
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      opacity: 0.93;
    `}
`;
const InformationIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  margin-top: 14px;
  color: black;
  cursor: pointer;

  &:hover + ${InformationBox} {
    opacity: 0.93;
  }
`;


const TipTextTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.color.surface};
  font-size: 10px; 
  margin-left : 15px;
  margin-top: 4px;
`
const TipText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.color.surface};
  font-size: 10px; 
  margin-left : 15px;
  line-height: 160%;
  margin-top: 0px;
`

const Container = styled.div`
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
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
  padding-bottom: 10px;
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
  margin-top : 18px;
  margin-left : 10px;
`

const CustomDivider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #ccc;
  margin: 0 10px;
  margin-right: 30px;

  align-self: center;
`;

const Divider = styled.div`
  height: 1px;
  background-color:#ccc;
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
  color : black; 
`;

const AddExperience = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-top: 15px;
  padding: 8px 16px;
  border-radius: 40px;
  height: 31px;
  background-color: transparent; 
  color: ${(props) => props.theme.color.blackHigh};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  border: none;
  outline: none;
  cursor: pointer;
  border: 1.148px solid var(--black-high, #272727);

  &:hover {
    background-color: ${(props) => props.theme.color.primary500};
    color: ${(props) => props.theme.color.blackHigh};
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

function Header({ handleSnack }) {
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

  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <DataInputProvider>
      <HeaderContainer>
        <TimeLineInfoBoxContainer>
          <Timeline>Timeline</Timeline>
          <InformationIcon
            src={InfoIcon}
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            isHovered={isIconHovered}
          />
        </TimeLineInfoBoxContainer>
        <InformationBox>
          <TipTextTitle>Quik Tip</TipTextTitle>
          <TipText>
            • 단위(일, 주, 월, 년)를 선택하여 타임라인의 기준을 설정할 수 있습니다. <br />
            • ‘전체’를 클릭하여 첫 기록부터 마지막 기록까지 한 눈에 볼 수 있습니다.<br />
            • ‘날짜 선택'을 하여 타임라인 시작점의 위치를 설정할 수 있습니다.
          </TipText>
        </InformationBox>
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
            <SelectDateText>날짜이동</SelectDateText>
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
        handleSnack={handleSnack}
        modalType={modalType}
        handleSetModalType={handleSetModalType}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </DataInputProvider>
  );
}

export default Header;
