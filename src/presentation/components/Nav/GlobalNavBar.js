// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import LogoFinal from "../../../assets/img/Logo_Final.svg";
// import UserProfile from "../../../assets/img/UserProfileExample.svg";
// import SearchIcon from "../../../assets/img/SearchIcon.svg";
// import { handleLogout, useUser } from "../../../service/providers/auth_provider";

// const GlobalContainer = styled.div`
//   background-color: ${props => props.theme.color.blackHigh};
//   width: 100%;
//   height: 52px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Logo = styled.div`
//   margin-left : 70px;
//   display: flex;
//   align-items: center;
// `;

// const LogoImg = styled.img`
//   width: 92px;
//   height: 24px;
// `;

// const LogoTextImg = styled.img`
//   width: 64px;
//   height: 41px;
// `;

// const SearchExperience = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 16px;
//   margin-left: 80px;
//   padding: 5px;
//   border-radius: 40px;
//   flex-shrink: 0;
//   background-color: ${props => props.theme.color.searchBackground};
// `;

// const SearchIconImg = styled.img`
//   width: 16px;
//   height: 16px;
//   margin-left : 8px;
//   margin-right: 10px;
// `;

// const SearchInput = styled.input`
//   border: none;
//   outline: none;
//   background-color: transparent;
//   color: ${props => props.theme.color.blackHigh};
//   // color: var(--disabled-1, #ABABAB);
//   font-family: ${props => props.theme.fontFamily.mainfont};
//   font-size: ${props => props.theme.fontSizes.Subtitle2};
//   // font-weight: ${props => props.theme.fontWeights.regular};
//   font-weight: 500;

//   &::placeholder {
//     color: var(--disabled-1, #ABABAB);
//   }
// `;

// const NavButtons = styled.div`
//   display: flex;
//   align-items: center;
//   padding-right: 70px;
// `;

// const Profile = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ProfileImg = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 8px;
//   border-radius: 50%;
// `;

// const ProfileName = styled.div`
//   font-family: ${props => props.theme.fontFamily.mainfont};
//   font-weight: ${props => props.theme.fontWeights.semibold};
//   font-size: ${props => props.theme.fontSizes.Subtitle2};
//   color: ${props => props.theme.color.surface};
// `;

// const GlobalNavBar = () => {
//   const user = useUser();
//   console.log(user);
//   return (
//     <GlobalContainer>
//       <Logo>
//         <LogoImg src={LogoFinal} />
//       </Logo>
//       <NavButtons>
//         <Profile>
//           <ProfileImg src={user.photoURL} />
//           <ProfileName>{user.displayName}</ProfileName>
//           <ProfileName onClick={handleLogout}>로그아웃</ProfileName>
//         </Profile>
//       </NavButtons>

//     </GlobalContainer>
//   );
// };

// export default GlobalNavBar;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import LogoFinal from "../../../assets/img/Logo_Final.svg";
import {
  handleLogout,
  useUser,
} from "../../../service/providers/auth_provider";

const GlobalContainer = styled.div`
  background-color: ${(props) => props.theme.color.blackHigh};
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 70px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 92px;
  height: 24px;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  padding-right: 70px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  z-index: 999;
  top: calc(100% + 10px);
  right: 0;
  width: 200px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.blackHigh};
  opacity: 0.95;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: default;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Subtitle2};
  color: ${(props) => props.theme.color.surface};
`;

const Email = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.searchBackground};
  margin-bottom: 4px;
`;

const LogoutButton = styled.button`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: #cdcdcd;
  background-color: transparent;
  border: none;
  margin-top: 20px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const GlobalNavBar = () => {
  const user = useUser();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleProfileClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <GlobalContainer>
      <Logo>
        <LogoImg src={LogoFinal} />
      </Logo>
      <NavButtons>
        <Profile onClick={handleProfileClick}>
          <ProfileImg src={user.photoURL} />
          <ProfileName>{user.displayName}</ProfileName>
          <Popup visible={isPopupVisible}>
            <ProfileImg
              style={{ width: "40px", height: "40px", margin: "0 auto" }}
              src={user.photoURL}
            />
            <ProfileName style={{ fontSize: "16px", margin: "10px auto" }}>
              {user.displayName}
            </ProfileName>
            <Email>{user.email}</Email>
            <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>
          </Popup>
        </Profile>
      </NavButtons>
    </GlobalContainer>
  );
};

export default GlobalNavBar;
