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
`;

const DateContainer = styled.div`
`;

function DateSelector({ onChange }) {
  const onChangeCallback = (date) => {
    // 사용자가 날짜를 선택했을 때 실행되는 콜백 함수
    onChange(date);
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