import styled from "styled-components";
import React from "react";
import SingleScrollView from "../commons/SingleScrollView";
import ModalContainer from "./ModalContainer";
import ModalTagSelection from "./ModalTagSelection";
import Img1 from "../../../assets/img/edit.svg";
import { DataInputProvider } from "../../../service/providers/data_input_provider";
import ExitModalBtn from "../buttons/ExitModalBtn";
import { DashedDivider } from "../commons/Divider";

const tags = ["협업", "성취감"];

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 510px;
  height: 554px;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.03);
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black-high, #272727);
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.Body1};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: 160%;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Tag = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  padding: 2px 8px;
  border-radius: 150px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 5px;
  margin-bottom: 0px;
`;

const DateDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackMedium};
  line-height: 22px;
  display: flex;
  align-items: start;
  /* text-align: right; */
`;

const ImgDiv = styled.img`
  width: auto;
  height: auto;
  border-radius: 3px;
  margin-bottom: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditButton = styled.button`
  width: 104px;
  height: 35px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10.8571px;
  gap: 10.86px;
  border-radius: 602.571px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};

  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.color.primary400};
  background-color: transparent;
  border: none;
  margin-left: auto;
  margin-top: 18px;

  &:hover {
    background-color: transparent;
    color: #cdcdcd;
  }

  &:active,
  &:focus {
    background-color: transparent;
    color: #cdcdcd;
    outline: none;
  }
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 22px;
  margin-bottom: 19px;
`;

function ModalView({ postDotData, handleDotClick }) {
  const tags = postDotData["selected-tags"];
  const imgURL = postDotData.imageURL;
  console.log(postDotData["selected-tags"].tagName);
  return (
    <ModalDiv>
      <HeaderDiv>
        <TitleDiv>{postDotData.title}</TitleDiv>
        <ExitModalBtn onClick={handleDotClick} />
      </HeaderDiv>
      <DashedDivider />
      {tags && (
        <div style={{ display: "flex" }}>
          {tags.map((tag) => (
            <Tag backgroundColor={tag["color"]}>{tag["tagName"]}</Tag>
          ))}
        </div>
      )}
      <DateDiv>{postDotData.date}</DateDiv>
      <SingleScrollView
        height={400}
        children={
          <ContentDiv>
            {imgURL ? (
              <ImgDiv src={imgURL} />
            ) : (
              <></>
            )}

            <Content>{postDotData["add-free"]}</Content>
          </ContentDiv>
        }
      />
    </ModalDiv>
  );
}

export default ModalView;
