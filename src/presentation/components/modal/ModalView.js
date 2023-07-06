import styled from "styled-components";
import SingleScrollView from "../commons/SingleScrollView";
import { DashedDivider } from "../commons/Divider";
import moment from "moment";
import CloseIcon from "../../../assets/img/close_icon.svg";
import IconButton from "../buttons/IconBtn";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import postService from "../../../service/firebase/PostService";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../../service/providers/auth_provider";

const api_key = "8f36c262357dcd59a33a305878142997";

function URLPreview({ url }) {
  const [previewData, setPreviewData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const response = await axios.get(
          `https://api.linkpreview.net/?key=${api_key}&q=${encodeURIComponent(
            url
          )}`
        );
        setPreviewData(response.data);
      } catch (error) {
        console.error("Error:", error);
        // Handle the error condition
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreviewData();
  }, [url]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!previewData) {
    return <div>미리보기 지원되지 않음</div>;
  }

  return (
    <>
      <div
        style={{
          height:
            "5000px" /* Set the desired maximum height for the container */,
          overflowY: "auto",
        }}
      >
        <h2>{previewData.title}</h2>
        <p>{previewData.description}</p>
        <img style={{ width: "100%" }} src={previewData.image} alt="Preview" />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Disquite으로 이동!
      </a>
    </>
  );
}

function ModalView({ postDotData, handleDotClick, onDelete }) {
  const tags = postDotData["selected-tags"];
  const imgURL = postDotData.imageURL;
  const link = postDotData.url;
  const timestamp = postDotData.date;
  const date = timestamp ? timestamp.toDate() : null;
  const [previewData, setPreviewData] = useState(null);
  const user = useUser();

  let formattedDate = null;
  if (date) {
    formattedDate = moment(date).format("YYYY년 M월 D일");
  }
  const handlePostDelete = () => {
    const userId = user.uid;
    postService.deletePost(postDotData.docId, userId);
    console.log("onDelete", onDelete);
    onDelete();
    handleDotClick();
  };

  return (
    <BackgroundDiv>
      <ModalDiv>
        <HeaderDiv>
          <TitleDiv>{postDotData.title}</TitleDiv>
          <IconButton
            iconImage={CloseIcon}
            size={"20px"}
            onClick={handleDotClick}
          />
        </HeaderDiv>
        <DashedDivider dashSize={"2.5px"} />
        {tags && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "12px",
            }}
          >
            {tags.map((tag) => (
              <Tag
                backgroundColor={tag["color"]}
                style={{
                  marginRight: "12px",
                }}
              >
                {tag["tagName"]}
              </Tag>
            ))}
            <div style={{ marginLeft: "auto", cursor: "pointer" }}>
              <DeleteIcon
                color="disabled"
                sx={{ fontSize: 35 }}
                onClick={handlePostDelete}
              />
            </div>
          </div>
        )}
        <DateDiv>{formattedDate}</DateDiv>
        <URLPreview url={link} />

        <SingleScrollView
          height={400}
          children={
            <ContentDiv>
              {imgURL ? <ImgDiv src={imgURL} /> : <></>}

              <Content>
                {postDotData["add-free"] !== null ? (
                  <>{postDotData["add-free"]}</>
                ) : postDotData["add-link"] !== null ? (
                  <>{postDotData["add-link"]}</>
                ) : (
                  <>
                    {postDotData["add-template-1"]}
                    {postDotData["add-template-2"]}
                  </>
                )}
              </Content>
            </ContentDiv>
          }
        />
      </ModalDiv>
    </BackgroundDiv>
  );
}

export default ModalView;

const BackgroundDiv = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 25px;
  padding-bottom: 40px;
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
  font-size: ${(props) => props.theme.fontSizes.Header6};
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 160%;
  padding-right: 10px;
  margin: auto;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  width: auto;
  height: auto;
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
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: white;
  display: flex;
  height: 15px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  display: flex;
  padding: 5px 17px 5px 17px;
  gap: 10px;
`;

const DateDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackMedium};
  line-height: 22px;
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`;

const ImgDiv = styled.img`
  max-width: 80%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 14px;
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  color: ${(props) => props.theme.color.blackHigh};
  font-style: normal;
  line-height: 22px;
  width: 80%;
`;
