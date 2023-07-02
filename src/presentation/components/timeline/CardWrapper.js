import { styled } from "styled-components";
import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";
import ExperienceCardSelfSmall from "../commons/ExperienceCardSelfSmall";
import ExperienceCardSelfMiddle from "../commons/ExperienceCardSelfMiddle";
import ExperienceCardSelf from "../commons/ExperienceCardSelf";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ isAbove }) => (isAbove ? 'column-reverse' : 'column')};
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  ${({ isAbove }) => (isAbove ? 'bottom: 60%;' : 'top: 60%;')};
`;

const gapList = {
  [lxSize]: "0px",
  [largeSize]: "14px",
  [mediumSize]: "11px",
  [smallSize]: "5px",
};

const CardWrapper = ({isAbove, mode, postDataList }) => {
  const renderCards = () => {
    switch (mode) {
      case lxSize:
        return postDataList.map((post) => <ExperienceCardSelf data={post} />);
      case largeSize:
        return postDataList.map((post) => <ExperienceCardSelfMiddle data={post} />);
      case mediumSize:
        return postDataList.map((post) => <ExperienceCardSelfSmall data={post} />);
      case smallSize:
        return postDataList.map((post) => <ExperienceCardSelfSmall data={post} />);
      default:
        return postDataList.map((post) => <ExperienceCardSelfSmall data={post} />);
    }
  };

  return <Wrapper isAbove={isAbove} style={{ gap: gapList[mode] ?? "0px" }}>{renderCards()}</Wrapper>;
};

export default CardWrapper;
