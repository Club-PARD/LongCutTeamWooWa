import React from "react";
import styled from "styled-components";
import { DatePicker } from "@gsebdev/react-simple-datepicker";
import { useUpdateDataInput } from "../../service/providers/data_input_provider";
import firebase from 'firebase/compat/app';


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
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.Body2};
  color: ${props => props.theme.color.blackHigh};
  padding-right : 20px;   
`;


const CustomDatePicker = styled(DatePicker)`
  /* 스타일 속성을 여기에 추가 */
  /* 예시: 배경색과 테두리 스타일 지정 */
  background-color: yellow;
  border: 1px solid #000000;
`;

function DateSelector() {

  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };
  
  const onChangeCallback = (event) => {
    const { value } = event.target;
    const parts = value.split("/"); // Split the date string into day, month, and year parts

    // Create a new Date object using the year, month (subtract 1 because months are zero-based), and day
    const date = new Date(parts[2], parts[0] - 1, parts[1]);

    // Convert the date to a Firestore-compatible format
    const firestoreDate = firebase.firestore.Timestamp.fromDate(date);
    handleInputChange("date", firestoreDate);
  };

  const currentDate = new Date(); // 현재 날짜 정보 가져오기
  const currentDateString = currentDate.toLocaleDateString(); // 현재 날짜를 문자열로 변환

  return (
    <Container style={{ flexWrap: "wrap" }}>
      <Text>날짜</Text>
      <CustomDatePicker
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