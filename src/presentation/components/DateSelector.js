import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
// import { DatePicker } from "@gsebdev/react-simple-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useUpdateDataInput } from "../../service/providers/data_input_provider";
import firebase from 'firebase/compat/app';
import DateIcon from "../../assets/img/GoToDateIcon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  height : 100%; 
  justify-content: space-between;
  align-items: center; /* 수정된 부분 */
  padding: 0px 11px;
`;
const DateIconImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  position: absolute; 
`;


const CustomDatePicker = styled(DatePicker)`
  /* 스타일 속성을 여기에 추가 */
  width: 85px; 
  height: 28px; 
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily.mainfont};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.Body2};
  color: ${props => props.theme.color.blackHigh};

  cursor: pointer;
  border: 1px solid var(--disabled-2, #CDCDCD);
  border-radius: 15px;
  padding-left: 35px;
  padding-right: 0px; 
`;

function DateSelector() {
  const [startDate, setStartDate] = useState(new Date());
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };

  const onChangeCallback = (date) => {

    // Convert the date to a Firestore-compatible format
    const firestoreDate = firebase.firestore.Timestamp.fromDate(date);
    handleInputChange("date", firestoreDate);
  };

  return (
    <Container style={{ flexWrap: "wrap" }}>
      {/* <Text>날짜</Text> */}
      <CustomDatePicker
        locale={ko}
        selected={startDate}
			  onChange={(date) => {
          onChangeCallback(date)
          setStartDate(date)
        }}
			  dateFormat="yyyy.MM.dd"
      />
      <DateIconImg src={DateIcon} alt="DateIcon" />
    </Container>
  );
}


export default DateSelector;