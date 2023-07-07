import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import firebase from "firebase/compat/app";

import PostHeader from "./PostHeader";
import { Divider } from "@mui/material";
import ExplainModal from "./ExplainModal";
import ListContainer from "./ListContainer";
import postService from "../../../service/firebase/PostService";
import { tags } from "../../../constants/tags";
import { useUser } from "../../../service/providers/auth_provider";
import { grey } from "@mui/material/colors";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 690px;
  height: 770px;
  background-color: white;
  border-radius: 15px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-top: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 15px;
  align-self: flex-end;
  border-radius: 100px;
  border: none;
  background: ${(props) =>
    props.length ? props.theme.color.primary300 : grey[400]};
  width: 122.674px;
  height: 45.196px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body1};
  color: white;
  cursor: ${(props) => (props.length ? null : "pointer")};
  pointer-events: ${(props) => (props.length ? "auto" : "none")};
`;

const ErrorMsg = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.Header4};
  color: ${(props) => props.theme.color.error};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ListModal({ disquiteId, closeModal, handleSnack }) {
  const [isLoading, setIsLoading] = useState(true);
  const [crawledData, setCrawledData] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCorrectId, setIsCorrectId] = useState(true);
  const user = useUser();

  const addMetaData = (data) => {
    const updatedData = {
      userId: disquiteId,
      imgSrc:
        "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg",
      items: [...data],
      tags: [...tags],
    };
    setCrawledData(updatedData);
  };

  const fetchCrawledData = async () => {
    try {
      if (!disquiteId) {
        throw new Error("Disquite Id is null");
      }
      const response = await axios.post("http://106.10.44.111:8000/crawl", {
        disquite_id: disquiteId,
      });
      addMetaData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("ErrorTest:", error);
      if (error.message === "Disquite Id is null") {
        //아이디가 빈값일 때
        setIsCorrectId(false);
      } else {
        //아이디가 없는 아이디 일 때
        setIsCorrectId(false);
      }
    } finally {
    }
  };

  // request data to the crawler
  useEffect(() => {
    fetchCrawledData();
  }, []);

  const handleSubmit = () => {
    const items = crawledData.items.filter((it) =>
      selectedItems.includes(it.id)
    );
    const result = items.map((item, index) => {
      const dateRowForm = item.date;
      const [month, day, year] = dateRowForm.split("/");
      const dateForm = new Date(year, month - 1, day);
      item.date = firebase.firestore.Timestamp.fromDate(dateForm);

      if (selectedTags[item.id] === undefined) {
        return {
          ...item,
          "selected-tags": [{ tagName: "디스콰이엇", color: "#8560F6" }], // Add an empty "selected-tags" property to each item
        };
      } else {
        const filteredTags = tags.filter((tag) =>
          selectedTags[item.id].includes(tag.id)
        );
        return {
          ...item,
          "selected-tags": [
            ...filteredTags,
            { tagName: "디스콰이엇", color: "#8560F6" },
          ], // Add an empty "selected-tags" property to each item
        };
      }
    });

    const userId = user.uid;
    result.forEach((element) => {
      console.log(element);
      postService.createPost(userId, element);
    });
    closeModal();
    handleSnack();
  };

  return (
    <Background>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "5",
        }}
      >
        <ModalContainer>
          <PostHeader userId={disquiteId} closeModal={closeModal} />
          <Divider />
          {isCorrectId ? (
            <ExplainModal
              userId={disquiteId}
              isLoading={isLoading}
              isCorrectId={isCorrectId}
            />
          ) : (
            <ErrorMsg>유효하지 않은 ID입니다.</ErrorMsg>
          )}

          {!isLoading && (
            <ListContainer
              data={crawledData}
              setSelectedTags={setSelectedTags}
              selectedTags={selectedTags}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}
          <SubmitButton onClick={handleSubmit} length={selectedItems.length}>
            추가하기
          </SubmitButton>
        </ModalContainer>
      </div>
    </Background>
  );
}

export default ListModal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
