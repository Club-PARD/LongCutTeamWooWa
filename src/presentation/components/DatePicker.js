import React from "react";
import styled from "styled-components";
import {DatePicker} from '@gsebdev/react-simple-datepicker';

function DatePicker({ data }) {
  const onChangeCallback = (date) => {
    // 사용자가 날짜를 선택했을 때 실행되는 콜백 함수
    console.log('Selected Date:', date);
  };

  return (
    <DatePicker
      id="datepicker-id"
      name="date-demo"
      onChange={onChangeCallback}
      value={'01/02/2023'}
    />
  );
}

export default DatePicker;