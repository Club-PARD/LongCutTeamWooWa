import styled from "styled-components";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { theme } from '../../styles/theme';

const DateRangeContainer = styled.div`
    margin: 100px 100px;
    width: 50%;
    height: 200px;
    background-color: ${props => props.theme.color.secondary050};
`;

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

    const rangeStyles = {
        background: theme.color.primary050,
        color: theme.color.primary900
    };

    return (
        <DateRangeContainer>
            DateRange입니다.
            <DateRangePicker
                ranges={selectedDateRange}
                rangeColors={[rangeStyles]}
                onChange={handleDateChange}
            />
        </DateRangeContainer>
    );
};

export default DateRange;
