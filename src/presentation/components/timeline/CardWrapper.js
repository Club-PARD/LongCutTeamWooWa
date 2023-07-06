import { styled } from "styled-components";
import { lxSize, largeSize, mediumSize, smallSize } from "./CardBuilder";
import ExperienceCardSelfSmall from "../commons/ExperienceCardSelfSmall";
import ExperienceCardSelfMiddle from "../commons/ExperienceCardSelfMiddle";
import ExperienceCardSelf from "../commons/ExperienceCardSelf";
import ExperienceCardSelfExtraSmall from "../commons/ExperienceCardSelfExtraSmall";



const CardWrapper = ({ setPostData, isAbove, mode, postDataList, handleDotClick }) => {
  
  const renderCards = (dataList) => {
    switch (mode) {
      case lxSize:
        return dataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }} >
            <ExperienceCardSelf isAbove={isAbove} data={post} />
          </div>
        ));
      case largeSize:
        return dataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }}>
            <ExperienceCardSelfMiddle data={post} />
          </div>
        ));
      case mediumSize:
        return dataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }}>
            <ExperienceCardSelfSmall data={post} />
          </div>
        ));
      case smallSize:
        return dataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }}>
            <ExperienceCardSelfExtraSmall data={post} />
          </div>
        ));
      default:
        return dataList.map((post) => (
          <div onClick={() => {
            handleDotClick();
            setPostData(post);
          }}>
            <ExperienceCardSelfSmall data={post} />
          </div>
        ));
    }
  };

  if (mode === smallSize) {
    const columns = Math.ceil(postDataList.length / 8);
    const columnArrays = Array.from({ length: columns }, () => []);
    postDataList.forEach((post, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(post);
    });

    return (
      <Container>
        {columnArrays.map((column, index) => (
          <Wrapper key={index} isAbove={isAbove} style={{ gap: gapList[mode] ?? "0px" }}>
            {renderCards(column)}
          </Wrapper>
        ))}
      </Container>
    );
  } else {
    return (
      <Wrapper isAbove={isAbove} style={{ gap: gapList[mode] ?? "0px" }}>
        {renderCards(postDataList)}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap};

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default CardWrapper;