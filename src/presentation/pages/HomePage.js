import React from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import BackgroundImg from "../../assets/img/MainBackground.png";

import CategoryBuilder from "../components/catagory";
import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
import ExperienceCardLinkMiddle from "../components/commons/ExperienceCardLinkMiddle";
import Timeline from "../components/timeline/index";
import { TimelineDataProvider } from "../../service/providers/timeline_data_provider";

import ListModal from "../components/postListItem";

import LinkBox from "../components/modal/LinkBox";
import LoginPage from "./LoginPage";
import { DataInputProvider } from "../../service/providers/data_input_provider";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
const TestBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin-bottom: 300px;
`;

const exampleCrawledData = {
  "add-free": null,
  "add-link": null,
  "tag-is": true, // 링크작성 : 테그 유무에 따라 로고 vs 테그 보여지는거 달라짐. -> "코드 추가 완료"
  "img-is": true, // 직접작성일 때, 이미지 유무에 따라 summary 길이 달라져야함. -> "코드 추가 작성필요."
  summary:
    "summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. ",
  "crawled-website": "disquiet",
  date: "06/25/2023",
  "selected-tags": [
    {
      color: "#8560F6",
      tagName: "리더십",
    },
    {
      color: "#ED735D",
      tagName: "협업",
    },
  ],
  title: "경험card - 링크로 기록경험card - 링크로 기록경험card",
  userId: "jshooni",
  imgSrc:
    "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg", //직접작성(제일큰거)일 때, img 주소
};

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);

  const handleSnack = () => {
    setOpen(true);
    setRerender(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <BackgroundContainer>
        <Background src={BackgroundImg} />
        <GlobalNavBar />
        <TimelineDataProvider>
          <div style={{ display: "flex", height: '100%'}}>
            <CategoryBuilder />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                overflowX: "hidden",
              }}
            >
              <DataInputProvider>
                <Header handleSnack={handleSnack} />
              </DataInputProvider>
              <Timeline rerender={rerender} setRerender={setRerender} />
            </div>
          </div>
        </TimelineDataProvider>
      </BackgroundContainer>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          action={null}
          onClose={null}
          severity="success"
          sx={{
            opacity: 0.8,
            paddingLeft: "20px",
            paddingRight: "25px",
            borderRadius: "30.332px",
            width: "100%",
            backgroundColor: "#272727",
            "& .MuiAlert-icon": {
              color: "rgba(17, 227, 178, 1)",
            },
            "& .MuiAlert-message": {
              color: "#FFF",
              fontSize: "20px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "160%",
            },
            "& .MuiAlert-icon svg": {
              fontSize: "2rem",
            },
          }}
        >
          기록이 저장되었습니다!
        </Alert>
      </Snackbar>

    </div>
  );
}

export default HomePage;
