import styled from "styled-components";
import React, { useState } from "react";
import InputTextField from "../commons/InputTextField";
import VerticalSpacing from "../commons/VerticalSpacing";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
import IDvsLinkButton from "./IDvsLinkButton";

const Title = styled.div`
  height: 22px;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
//   color: ${(props) => props.theme.color.blackHigh};
color: var(--black-medium, #7A7A7A);
  font-style: normal;
  line-height: 22px;
  margin-top : 20px; 
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 11px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 41px;
  background: ${(props) => props.theme.color.searchBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px 13px;
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  line-height: 22px;
  background: #ebebeb;
  border: none;
  outline: none;
  width: 100%;
`;

const ServiceDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ServiceText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  line-height: 22px;
  color: ${(props) => props.theme.color.blackHigh};
  margin-right: 30px; 
`;

const Divider = styled.div`
  width: 1px;
  height: 18px;
  background-color: ${(props) => props.theme.color.blackHigh};
  margin: 0 11px;
  opacity: 0.4;
`;
const DisquietText = styled.p`
font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
`;
const ServiceTextContent = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  line-height: 22px;
  color: ${(props) => props.theme.color.blackHigh};
  opacity : 0.5;
`;

function IDBox() {
  const updateDataInput = useUpdateDataInput();
  const handler = (event) => {
    const {value} = event.target;
    console.log(value);
    updateDataInput("disquite-id", value);
  }
  return (
    <Div>
      <Title>나의 경험이 기록된 서비스의 ID를 입력하고 불러오세요!</Title>
      <ServiceDiv>
        <ServiceText>서비스 명</ServiceText>
        <DisquietText>디스콰이엇</DisquietText>
        {/* <Divider />
        <ServiceTextContent>네이버 블로그</ServiceTextContent>
        <Divider />
        <ServiceTextContent>브런치</ServiceTextContent> */}
      </ServiceDiv>
      <VerticalSpacing height={3} />
      <InputDiv>
        <Input placeholder="ID를 입력하세요!" onBlur={handler}/>
      </InputDiv>
      <VerticalSpacing height={8} />
    </Div>
  );
}

export default IDBox
