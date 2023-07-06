import { styled } from "styled-components";
import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";
import ExperienceCardSelfSmall from "../commons/ExperienceCardSelfSmall";
import ExperienceCardSelfMiddle from "../commons/ExperienceCardSelfMiddle";
import ExperienceCardSelf from "../commons/ExperienceCardSelf";
import ExperienceCardSelfExtraSmall from "../commons/ExperienceCardSelfExtraSmall";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ isAbove }) => (isAbove ? "column-reverse" : "column")};
  position: absolute;
  font-size: 12px;
  ${({ isAbove }) => (isAbove ? "bottom: 60%;" : "top: 60%;")};
`;

const gapList = {
  [lxSize]: "0px",
  [largeSize]: "14px",
  [mediumSize]: "11px",
  [smallSize]: "6px",
};

const CardWrapper = ({ setPostData, isAbove, mode, postDataList, handleDotClick }) => {
  const renderCards = () => {
    switch (mode) {
      case lxSize:
        return postDataList.map((post) => (
          <div onClick={() => {
              handleDotClick();
              setPostData(post);
            }} >
            <ExperienceCardSelf isAbove={isAbove} data={post} />
          </div>
        ));
      case largeSize:
        return postDataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }}>
          <ExperienceCardSelfMiddle data={post} />
          </div>
        ));
      case mediumSize:
        return postDataList.map((post) => (
          <div onClick={() => {
              handleDotClick();
              setPostData(post);
            }}>
          <ExperienceCardSelfSmall data={post} />
          </div>
        ));
      case smallSize:
        return postDataList.map((post) => (
          <div onClick={() => {
              handleDotClick();
              setPostData(post);
            }}>
          <ExperienceCardSelfExtraSmall data={post} />
          </div>
        ));
      default:
        return postDataList.map((post) => (
          <div onClick={() => {
              handleDotClick();
              setPostData(post);
            }}>
          <ExperienceCardSelfSmall data={post} />
          </div>
        ));
    }
  };

  return (
    <Wrapper isAbove={isAbove} style={{ gap: gapList[mode] ?? "0px" }}>
      {renderCards()}
    </Wrapper>
  );
};

export default CardWrapper;
