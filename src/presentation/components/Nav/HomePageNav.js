import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { signInWithGoogle, logout, addAuthStateChangedListener } from "../../../service/firebase/auth";

const NavContainer = styled.div`
  width: 100%;
`;

const BtnDiv = styled.button`
  padding: 4px 12px;
  background: ${(props) => props.theme.color.disabled2};
  border: 1px solid #cdc;
  border-radius: 100px;
`;

const StatusText = styled.span`
  margin-left: 8px;
`;

const HomePageNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태 변경 리스너 등록
    const unsubscribe = addAuthStateChangedListener((user) => {
      setIsLoggedIn(!!user);
    });

    // 컴포넌트 언마운트 시 리스너 정리
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("로그인 실패", error);
      });
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("로그아웃 실패", error);
      });
  };

  return (
    <div>
      <NavContainer>
        {!isLoggedIn && (
          <BtnDiv onClick={handleLogin}>구글 로그인</BtnDiv>
        )}
        {isLoggedIn && (
          <>
            <BtnDiv onClick={handleLogout}>로그아웃</BtnDiv>
            <StatusText>로그인됨</StatusText>
          </>
        )}
        {!isLoggedIn && (
          <StatusText>로그인되지 않음</StatusText>
        )}
      </NavContainer>
    </div>
  );
};

export default HomePageNav;
