import React, { useState } from "react";
import styled from "styled-components";
import LoadingImg from "../../../assets/img/loading.gif";

const Container = styled.div`
    width : 100%; 
    display : coloumn;
    justify-content: space-between;
    // align-items: center;
    padding : 20px; 
    padding-top : 0px; 
`

const FirstExplain = styled.div`
  justify-content: center;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.Header5};
  color: ${props => props.theme.color.blackHigh};

    margin-top : 27px; 
`
const SecondExplain = styled.div`
  justify-content: center;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Body1};
  color: ${props => props.theme.color.blackHigh};
  margin-top : 10px; 
`

function ExplainModal({ userId , isLoading}) {

  return (
    <Container>
        <FirstExplain>

            {userId ?? "no id found"}님의 디스콰이엇 계정에서 {isLoading ? "글을 불러오는 중입니다.." : "불러온 글입니다."}
        </FirstExplain>
        <SecondExplain>
            아크박스 목록에 추가할 글을 선택하세요!
        </SecondExplain>
        {isLoading && (
        <img
          style={{
            position: "fixed",
            zIndex: 20,
            width: "500px",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src={LoadingImg}
          alt="Loading"
        />
      )}
    </Container>
    
    
  );
}

export default ExplainModal;  