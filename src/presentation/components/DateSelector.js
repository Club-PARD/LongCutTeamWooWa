import React from "react";
import styled from "styled-components";
import { DatePicker } from "@gsebdev/react-simple-datepicker";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height : 100%; 
  justify-content: space-between;
  align-items: center; /* 수정된 부분 */
  padding: 0px 11px;
`;


const Text = styled.p`
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.Body2};
  color: ${props => props.theme.color.blackHigh};
`;

const DateContainer = styled.div`
`;

function DateSelector({ onChange }) {
  const onChangeCallback = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  const currentDate = new Date(); // 현재 날짜 정보 가져오기
  const currentDateString = currentDate.toLocaleDateString(); // 현재 날짜를 문자열로 변환

  return (
    <Container style={{flexWrap: "wrap"}}>
      <Text>날짜입력</Text>
      <DatePicker
        id="datepicker-id"
        name="date-demo"
        onChange={onChangeCallback}
        value={currentDateString}
        className="react-simple-datepicker-popup"
      />
    </Container>
  );
}

export default DateSelector;