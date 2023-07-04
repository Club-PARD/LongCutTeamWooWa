import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import PostHeader from "./PostHeader";
import { Divider } from "@mui/material";
import ExplainModal from "./ExplainModal";
import ListContainer from "./ListContainer";

const ModalContainer = styled.div`
  width: 690px;
  height: 770px;
  background-color: ${(props) => props.theme.color.secondary050};
  border-radius: 15px;
  padding: 30px;
  padding-top: 0px;
`;

const exampleCrawledData = {
  crawledWebsite: "disquiet",
  date: "06/25/2023",
  selectedTags: [
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
    "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg",
  tags: [
    {
      id: 1,
      name: "태그1",
      color: "#FF0000",
    },
    {
      id: 2,
      name: "태그2",
      color: "#00FF00",
    },
    {
      id: 3,
      name: "태그3",
      color: "#0000FF",
    },
    {
      id: 4,
      name: "태그4",
      color: "#FFFF00",
    },
    {
      id: 5,
      name: "태그5",
      color: "#FF00FF",
    },
    {
      id: 6,
      name: "태그6",
      color: "#00FFFF",
    },
    {
      id: 7,
      name: "태그7",
      color: "#800080",
    },
  ],
  items: [
    {
      id: 1,
      title: "첫 번째 아이템",
      date: "2022.01.04",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 2,
      title: "두 번째 아이템",
      date: "2023.05.05",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 3,
      title: "세 번째 아이템",
      date: "2023.05.10",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 4,
      title: "네 번째 아이템",
      date: "2023.05.14",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 5,
      title: "다섯 번째 아이템",
      date: "2023.05.20",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 6,
      title: "여섯 번째 아이템",
      date: "2023.06.22",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 7,
      title: "일곱 번째 아이템",
      date: "2023.06.23",
      tagIds: [1, 2, 3, 4, 5, 6, 7],
    },
  ],
};

function ListModal({disquiteId}) {
  const [crawledData, setCrawledData] = useState([]);

  const addMetaData = () => {
    const updatedData = {
      userId: disquiteId,
      items: [...crawledData],
    };
    setCrawledData(updatedData);
  }

  const fetchCrawledData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/crawl', { disquite_id: disquiteId });
      setCrawledData(response.data);
      addMetaData();
      console.log(crawledData);
    } catch (error) {
      console.log('Error:', error);
      // Handle the error condition
    }
  };
  

  // request data to the crawler
  useEffect(()=>{
    fetchCrawledData();
    
  }, []);

  return (
    <ModalContainer>
      <PostHeader data={crawledData} />
      <Divider />
      <ExplainModal data={crawledData} />
      {/* <ListContainer data={crawledData} /> */}
    </ModalContainer>
  );
}

export default ListModal;

