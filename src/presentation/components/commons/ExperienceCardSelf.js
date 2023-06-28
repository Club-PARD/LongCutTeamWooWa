import React from "react";
import styled from "styled-components";


const CardBox = styled.div`
  width: 162px;
  height: auto;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tag = styled.div`
  background-color: #f1f1f1;
  display: inline;
  padding: 4px 8px;
  border-radius: 150px;
  font-size: 14px;
  color: #333333;
  width : fit-content; 
  
`;


const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: 138px;
    height: 22px;
  color: #333333;
    margin-top : 15px ; 
    margin-bottom : 10px; 
`;

const SummaryText = styled.p`
    margin-top : 0;
  font-size: 14px;
  color: #666666;
`;

const ImgBox = styled.div`
  width: 162px;
  height: 199px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


function ExperienceCard({ tag, title, summary, imgSrc }) {
    return (
      <CardBox>
        <Tag>{tag}</Tag>
        <TitleText>{title}</TitleText>
        <SummaryText>{summary}</SummaryText>
        <ImgBox>
            <Img src={imgSrc} alt="이미지" />
        </ImgBox>
      </CardBox>
    );
  }

export default ExperienceCard;




{/* < 부모 component에서 부를 때 >  */}
// import React from "react";
// import styled from "styled-components";
// // import PopUp from "./presentation/components/popup/PopUp";
// // import save_icon from "./assets/img/popup_save.svg";
// // import DateSelector from "./presentation/components/DateSelector";
// import ExperienceCard from "./presentation/components/commons/ExperienceCard";

// const TestPage = () => {
//     const tagValue = "태그";
//     const titleValue = "제목";
//     const summaryValue = "요약 내용";
//     const IMG = "https://img.hankyung.com/photo/202105/PRU20210518011301055_P4.jpg";
  
//     return (
//       <div>
//         <ExperienceCard 
//             tag={tagValue} 
//             title={titleValue} 
//             summary={summaryValue} 
//             imgSrc={IMG}
//         />
//       </div>
//     );
// }

// export default TestPage;