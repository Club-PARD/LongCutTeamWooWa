import styled from "styled-components";
import React from "react";
import SingleScrollView from "../commons/SingleScrollView";
import ModalContainer from "./ModalContainer";
import ModalTagSelection from "./ModalTagSelection";
import Img1 from "../../../assets/img/edit.png";

const tags = ["협업", "성취감"];

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const DateDiv = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #222222;
  opacity: 0.3;
`;

const ImgDiv = styled.div`
  width: 289.17px;
  height: 171px;
  background: #d9d9d9;
  opacity: 0.5;
  border-radius: 3px;
  margin-bottom: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImg = styled.img``;

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
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #cdcdcd;
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
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #222222;
  margin-bottom: 19px;
`;

function ModalView() {
  const isImageUploaded = false; // Set this value based on whether an image is uploaded or not

  return (
    <ModalContainer
      title={"경험 제목"}
      children={
        <Div1>
          <DivRow>
            <ModalTagSelection modalTagList={tags} hasButton={false} />
            <DateDiv>2022년 12월 15일</DateDiv>
          </DivRow>
          <SingleScrollView
            height={400}
            children={
              <ContentDiv>
                <ImgDiv>
                  {isImageUploaded ? (
                    <img alt="Uploaded Image" />
                  ) : (
                    "이미지 업로드 안됐을 때 이 글이 보여짐"
                  )}
                </ImgDiv>
                <Content>
                  백예은 김현서 김신후 정승훈 최고! 배예진 김현서 김신후 정승훈
                  최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서 김신후
                  정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서
                  김신후 정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진
                  김현서 김신후 정승훈 최고!배예진 김현서 김신후 정승훈
                  최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서 김신후
                  정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서
                  김신후 정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진
                  김현서 김신후 정승훈 최고!배예진 김현서 김신후 정승훈
                  최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서 김신후
                  정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서
                  김신후 정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진
                  김현서 김신후 정승훈 최고!배예진 김현서 김신후 정승훈
                  최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서 김신후
                  정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진 김현서
                  김신후 정승훈 최고!배예진 김현서 김신후 정승훈 최고!배예진
                  김현서 김신후 정승훈 최고!배예진 김현서 김신후 정승훈
                  최고!배예진 김현서 김신후 정승훈 최고!
                </Content>
              </ContentDiv>
            }
          />
          <EditButton>
            <IconImg src={Img1} />
            수정하기
          </EditButton>
        </Div1>
      }
    />
  );
}

export default ModalView;
