import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import firebase from "firebase/compat/app";


import PostHeader from "./PostHeader";
import { Divider } from "@mui/material";
import ExplainModal from "./ExplainModal";
import ListContainer from "./ListContainer";
import postService from "../../../service/firebase/PostService";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 690px;
  height: 770px;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
`;

const SubmitButton = styled.button`
  margin-top: 15px;
  align-self: flex-end;
  border-radius: 100px;
  border: none;
  background: ${props => props.disabled ? 'rgba(216, 216, 216, 1)' : props.theme.color.primary300};
  width: 122.674px;
  width: 122.674px;
  height: 45.196px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Body1};
  color: white;
  cursor: ${props => props.disabled ? null : 'pointer'};
`;

const tags = [
  {id:1, tagName: "인사이트", color: "#4386F7" },
  {id:2, tagName: "여행", color: "#F0935F" },
  {id:3, tagName: "친구", color: "#90BC77" },
  {id:4, tagName: "업무", color: "#77BCAB" },
  {id:5, tagName: "학업", color: "#F673A2" },
  {id:6, tagName: "회고", color: "#ED735D" },
  {id:7, tagName: "연애", color: "#8560F6" },
  {id:8, tagName: "추억", color: "#FFCF55" },
  {id:9, tagName: "기타", color: "#4386F7" },
];

function ListModal({disquiteId, closeModal}) {
  const [isLoading, setIsLoading] = useState(true);
  const [crawledData, setCrawledData] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});

  const addMetaData = (data) => {
    const updatedData = {
      userId: disquiteId ?? "owen",
      imgSrc:
    "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg",
      items: [...data],
      tags: [...tags],
    };
    setCrawledData(updatedData);
  }

  const fetchCrawledData = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/crawl", {
        disquite_id: disquiteId ?? "owen",
      });
      addMetaData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error:", error);
      // Handle the error condition
    } finally {
      
    }
  };
  

  // request data to the crawler
  useEffect(() => {
    fetchCrawledData();
  }, []);

  const handleSubmit = () => {
    const items = crawledData.items;
    const result = items.map((item, index) => {
      const dateRowForm = item.date;
      const [month, day, year] = dateRowForm.split("/");
      const dateForm = new Date(year, month - 1, day);
      item.date = firebase.firestore.Timestamp.fromDate(dateForm);
      
      if(selectedTags[item.id] === undefined){
        return {
          ...item,
          "selected-tags": [{ tagName: "디스콰이엇", color: "#8560F6" },], // Add an empty "selected-tags" property to each item
        };
      } else{
        const filteredTags = tags.filter((tag) => selectedTags[item.id].includes(tag.id));
        return {
          ...item,
          "selected-tags": [...filteredTags, { tagName: "디스콰이엇", color: "#8560F6" },], // Add an empty "selected-tags" property to each item
        };
      }
    });
    const userId = "tlsgn";
    result.forEach((element) => {
      console.log(element);
      postService.createPost(userId, element);
    });
  }

  return (
    <Background>
    <div style={{position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '5',
      }}>
    <ModalContainer>
      <PostHeader userId={disquiteId} closeModal={closeModal} />
      <Divider />
      <ExplainModal userId={disquiteId} isLoading={isLoading} />
      {!isLoading && <ListContainer data={crawledData} setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>}
      <SubmitButton onClick={handleSubmit} disabled={isLoading}>추가하기</SubmitButton>
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
