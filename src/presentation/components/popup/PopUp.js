import React from "react";
import styled from "styled-components";
import SubmitBtn from '../buttons/SubmitBtn';

const PopUpContainer = styled.div`
    display: flex;
    width: 510px;
    height: 217px;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FirstText = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: black;
  flex: column;
  text-align: center;
  margin-bottom: 0px;
`;

const SecondText = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: black;
  flex: column;
  text-align: center;
  margin-top: 8px;
`;

function PopUp({imgSrc, text1, text2}) {
    return (
        <PopUpContainer>
           <img src={imgSrc} alt="PopUp-Icon" />

            <TextContainer>
                <FirstText>{text1}</FirstText>
                <SecondText>{text2}</SecondText>    
            </TextContainer>

            <SubmitBtn buttonText="확인" />
        </PopUpContainer>
    );
  }
  export default PopUp;
