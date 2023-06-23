import React from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

const NavContainer = styled.div`
    width : 100%;
`;
const BtnDiv = styled.button`
  padding: 4px 12px;
  background: ${props => props.theme.color.disabled2};
  border: 1px solid #CDCDCD;
  border-radius: 100px;
`;


const HomePageNav = (userID) => {
    return (
        <div>
            <NavContainer>
                <BtnDiv>승훈 101231230 </BtnDiv>
            </NavContainer>
        </div>
    );
}

export default HomePageNav;