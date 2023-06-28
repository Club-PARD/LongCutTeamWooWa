import styled from "styled-components";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // 스타일 시트를 임포트
import "react-date-range/dist/theme/default.css"; // 테마 스타일 시트를 임포트

const DateRangeContainer = styled.div`
    margin : 100px 100px;    
    width: 50%; 
    height: 200px; 
    background-color: ${props => props.theme.color.secondary050};
    
`

const DateRange = () => {
    const [selectedDateRange, setSelectedDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const handleDateChange = (ranges) => {
        setSelectedDateRange([ranges.selection]);
    };

    return (
        <DateRangeContainer>
            DateRange입니다.
            <DateRangePicker
                ranges={selectedDateRange}
                onChange={handleDateChange}
            />
        </DateRangeContainer>
    );
};

export default DateRange;

