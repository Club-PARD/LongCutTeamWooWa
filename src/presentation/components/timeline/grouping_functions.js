import { format, startOfDay, getWeek} from "date-fns";

function getYearMonthWeek(date) {
  const year = date.getFullYear(); // 년도
  const month = date.getMonth() + 1; // 월 (0부터 시작하므로 +1)
  const firstDayOfMonth = new Date(year, date.getMonth(), 1); // 해당 월의 첫 날
  const diff = date.getDate() + firstDayOfMonth.getDay() - 1;
  const week = Math.ceil(diff / 7); // 해당 월의 몇 주차인지 계산

  return {
    year,
    month,
    week
  };
}

// Function to convert map data to the desired format by days
const groupDataByDay = (data) => {
  const groupedData = {};

  for (const [, value] of data.entries()) {
    const date = startOfDay(value.date.toDate());
    
    const formattedDate = format(date, "MM/dd/yyyy");
    const [month, day, year] = formattedDate.split('/');
    const dateStr = `${year}년 ${month}월 ${day}일`

    if (!groupedData[dateStr]) {
      groupedData[dateStr] = [];
    }

    groupedData[dateStr].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by weeks
const groupDataByWeek = (data) => {
  const groupedData = {};

  for (const [, value] of data.entries()) {
    const date = value.date.toDate();
    console.log(date);
    const { year, month, week }  = getYearMonthWeek(date);
    const dateStr = `${year}년 ${month}월 ${week}주차`

    if (!groupedData[dateStr]) {
      groupedData[dateStr] = [];
    }

    groupedData[dateStr].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by months
const groupDataByMonth = (data) => {
  const groupedData = {};

  for (const [, value] of data.entries()) {
    const date = value.date.toDate();
    const formattedMonth = format(date, "MM/yyyy");
    const [month, year] = formattedMonth.split('/');

    const dateStr = `${year}년 ${month}월`;
    if (!groupedData[dateStr]) {
      groupedData[dateStr] = [];
    }

    groupedData[dateStr].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by years
const groupDataByYear = (data) => {
  const groupedData = {};

  for (const [, value] of data.entries()) {
    const date = value.date.toDate();
    const formattedYear = format(date, "yyyy");

    const dateStr = `${formattedYear}년`;
    if (!groupedData[dateStr]) {
      groupedData[dateStr] = [];
    }

    groupedData[dateStr].push(value);
  }

  return groupedData;
};

export {groupDataByDay, groupDataByWeek, groupDataByMonth, groupDataByYear};
