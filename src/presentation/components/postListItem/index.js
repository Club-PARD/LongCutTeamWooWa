import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import { Divider } from "@mui/material";
import ExplainModal from "./ExplainModal";

// font-family: ${props => props.theme.fontFamily.mainfont};
//   font-weight: ${props => props.theme.fontWeights.semibold};
//   font-size: ${props => props.theme.fontSizes.Body1};
//   color: ${props => props.theme.color.blackHigh};

const ModalContainer = styled.div`
    width : 590px; 
    height : 600px; 
    background-color : ${(props) => props.theme.color.secondary050};
    border-radius: 15px;
    padding : 30px; 
    padding-top : 0px; 
`

const exampleCrawledData = {
    "add-free": null,
    "add-link": null,
    "tag-is": null, // 링크작성 : 테그 유무에 따라 로고 vs 테그 보여지는거 달라짐. -> "코드 추가 완료"
    "img-is": true, // 직접작성일 때, 이미지 유무에 따라 summary 길이 달라져야함. -> "코드 추가 작성필요."
    "summary": "summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. summary 입니다. ",
    "crawled-website": "disquiet",
    "date": "06/25/2023",
    "selected-tags": [
        {
            "color": "#8560F6",
            "tagName": "리더십",
        },
        {
            "color": "#ED735D",
            "tagName": "협업",
        },
    ],
    "title": "경험card - 링크로 기록경험card - 링크로 기록경험card",
    "userId": "jshooni",
    "imgSrc": "https://img.seoul.co.kr//img/upload/2023/03/19/SSC_20230319153307.jpg", //직접작성(제일큰거)일 때, img 주소 
}

function ListModal() {
    
    return (
        <ModalContainer>
            <PostHeader data={exampleCrawledData}/>
            <Divider />
            <ExplainModal data={exampleCrawledData}/>
        </ModalContainer>
    );
}

export default ListModal;  