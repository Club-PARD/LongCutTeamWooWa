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
import InfoIcon from "../../../assets/img/InfoIcon.svg";
import ListModal from "../postListItem";
import { da } from "date-fns/locale";

const HeaderContainer = styled.div`
  padding-top: 40px;
  margin-left: 61px;
`;

const TimelineContainer = styled.div`
  display: flex;
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

const InfoBoxImg = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  z-index: 9;
  margin-left: 12px;
  margin-top: 15px;
  border-radius: 50%;
`;

const TipContaioner = styled.div`
  position: absolute;
  z-index: 8;
  width: 341px;
  height: 90px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.blackHigh};
  margin-left: 55px;
  top: 6.5px;
  opacity: ${(props) => (props.show ? "0.95" : "0")};
  transition: opacity 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 90px;
    left: 30.8%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid ${(props) => props.theme.color.blackHigh};
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

const TipTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: 11px;
  color: ${(props) => props.theme.color.surface};
  margin-left: 15px;
  margin-bottom: 4px;
`;
const TipContent = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 11px;
  color: ${(props) => props.theme.color.surface};
  margin-top: 0px;
  margin-left: 15px;
  line-height: 160%;
`;

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
  margin-top: 18px;
  margin-left: 10px;
`;

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
  background-color: #ccc;
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
  color: black;
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
  const updateData = useUpdateDataInput();
  const dataInput = useDataInput();
  const [isDalogOpen, setIsDalogOpen] = useState(false);

  const handleListDialog = () => {
    setIsDalogOpen(!isDalogOpen);
  };

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
    updateData("title", null);
    updateData("selected-tags", null);
    updateData("add-template-1", null);
    updateData("add-template-2", null);
    updateData("add-free", null);
    updateData("add-link", null);
    updateData("isExpanded", false);
  };

  const handleLinkModalOpen = () => {
    setModalType("add-link");
    setIsModalOpen(!isModalOpen);
  };

  const handleTimelineDataChange = (name, value) => {
    updateDataInput(name, value);
  };

  const handleButtonClick = (key, value) => {
    setActiveButton(value.activationIndex);
    handleTimelineDataChange("grouping", key);
  };
  const [showTip, setShowTip] = useState(false);

  // InfoBoxImg에 마우스가 올라갔을 때
  const handleMouseEnter = () => {
    setShowTip(true);
  };

  // InfoBoxImg에서 마우스가 벗어났을 때
  const handleMouseLeave = () => {
    setShowTip(false);
  };

  return (
    <>
      <HeaderContainer>
        <TipContaioner show={showTip}>
          <TipTitle>Quick Tip</TipTitle>
          <TipContent>
            • 단위(일, 주, 월, 년)를 선택하여 타임라인의 기준을 설정할 수
            있습니다.
            <br />
            • ‘날짜 선택'을 하여 타임라인 시작점의 위치를 설정할 수
            있습니다.
          </TipContent>
        </TipContaioner>
        <TimelineContainer>
          <Timeline>Timeline</Timeline>
          <InfoBoxImg
            src={InfoIcon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </TimelineContainer>

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

            <SelectDateText>날짜이동</SelectDateText>
            <DateSelector shouldNavigateTimeline={true}/>
          </ButtonContainer>
          <ButtonContainer2>
            <AddLinkButton onClick={handleLinkModalOpen}>
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
        handleListDialog={handleListDialog}
      />
      {isDalogOpen && (
        <ListModal
          handleSnack={handleSnack}
          disquiteId={dataInput["disquite-id"]}
          closeModal={handleListDialog}
        />
      )}
    </>
  );
}

export default Header;
