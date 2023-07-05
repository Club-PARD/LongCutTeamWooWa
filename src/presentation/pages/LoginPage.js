import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/img/MainBackground.png";
// import { signInWithGoogle, logout, addAuthStateChangedListener } from "../../../service/firebase/auth";
import Login_LogoImg from "../../assets/img/Login_Logo.svg";
import LogoPageIMG from "../../assets/img/LogoPageIMG.svg";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: -10;
`;
const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 80%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Logobox = styled.div`
  width: 96px;
  height: 25px;
  margin-top : 63px; 
  margin-left : 74px;
`
const LogoImg = styled.img`
  width : 100%; 
  height : 100%;
`

const GroupIMGbox = styled.div`
text-align: center;
margin-top : 70px;
`
const GroupIMG = styled.img`
width: 80%;
height: 80%;
`

const GoogleButton = styled.div`
width : 343px;
height : 54px;
background-color : blue; 
color : white; 
border-radius: 15px;
margin-left : 200px;
margin-top : 100px;
text-align : center; 
`
const LoginPage = () => {

  return (
    <div>
      <BackgroundContainer >
        <Background src={BackgroundImg} />
        <Logobox>
          <LogoImg src={Login_LogoImg} />
        </Logobox>
        <GroupIMGbox>
          <GroupIMG src={LogoPageIMG} />
        </GroupIMGbox>
          <GoogleButton>
            GoogleButton
          </GoogleButton>
      </BackgroundContainer>
    </div>

  );
};

export default LoginPage;
