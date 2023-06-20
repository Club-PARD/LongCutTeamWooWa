import React from "react";
import styled from "styled-components";
import { DatePicker } from "@gsebdev/react-simple-datepicker";

const Container = styled.div`
  display: flex;
  background-color: red;
  width: 400px;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 20px;
  color: gray;
`;

const DateContainer = styled.div`
  width: 300px;
  height: 600px;
`;

function DateSelector({ data }) {
  const onChangeCallback = (date) => {
    // 사용자가 날짜를 선택했을 때 실행되는 콜백 함수
    console.log("Selected Date:", date);
  };

  return (
    <Container>
      <Text>날짜입력</Text>
      <DateContainer>
        <DatePicker
          id="datepicker-id"
          name="date-demo"
          onChange={onChangeCallback}
          value={'01/02/2023'}
          className="react-simple-datepicker-popup"
        />
      </DateContainer>
    </Container>
  );
}

export default DateSelector;
