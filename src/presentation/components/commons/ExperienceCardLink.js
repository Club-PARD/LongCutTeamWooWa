import React from "react";
import styled from "styled-components";


const CardBox = styled.div`
  width: 184px;
  height: auto;
  background-color: ${props => props.theme.color.surface};
  border-radius: 15px;
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
  justify-content: center;
  align-items: center;
  width : fit-content; 
`;


const TitleText = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.subtitle2};
  color: ${props => props.theme.color.blackHigh};
  width: 138px;
    height: auto;
    margin-top : 15px ; 
    margin-bottom : 10px; 
`;

const SummaryText = styled.p`
    margin-top : 0;

  font-weight: 400;
font-size: 14px;
line-height: 160%;
  color: #666666;
`;

const LogoBox = styled.div`
  width: 32px;
  height: 32px;
  margin-left: auto;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margina-top : 20px; 
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;


function ExperienceCardLink({ tag, title, summary, imgSrc }) {
    return (
      <CardBox>
        <Tag>{tag}</Tag>
        <TitleText>{title}</TitleText>
        <SummaryText>{summary}</SummaryText>
        <LogoBox>
            <Logo src={imgSrc} alt="이미지" />
        </LogoBox>
      </CardBox>
    );
  }

export default ExperienceCardLink;



// import React from "react";
// import styled from "styled-components";
// // import PopUp from "./presentation/components/popup/PopUp";
// // import save_icon from "./assets/img/popup_save.svg";
// // import DateSelector from "./presentation/components/DateSelector";
// import ExperienceCardLink from "./presentation/components/commons/ExperienceCardLink";

// const TestPage = () => {
//     const tagValue = "태그";
//     const titleValue = "경험card - 링크로 기록";
//     const summaryValue = "요약 내용입니다. 요약내용입니다. 요약내용입니다. 요약내용입니다 요약내용입니다.요약내용입니다.요약내용입니다.";
//     const IMG = "https://assets.disquiet.io/images/product/thumbnail/33a20baaee7cde30da7a06f262c77972c6ae5821c04823ebfa41864b2e3ea4bc";
  
//     return (
//       <div>
//         <ExperienceCardLink 
//             tag={tagValue} 
//             title={titleValue} 
//             summary={summaryValue} 
//             imgSrc={IMG}
//         />
//       </div>
//     );
// }

// export default TestPage;