import { format, startOfDay, getWeek} from "date-fns";

// Function to convert map data to the desired format by days
const groupDataByDay = (data) => {
  const groupedData = {};

  for (const [index, value] of data.entries()) {
    const date = startOfDay(value.date.toDate());
    
    const formattedDate = format(date, "MM/dd/yyyy");

    if (!groupedData[formattedDate]) {
      groupedData[formattedDate] = [];
    }

    groupedData[formattedDate].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by weeks
const groupDataByWeek = (data) => {
  const groupedData = {};

  for (const [index, value] of data.entries()) {
    const date = value.date.toDate();
    const week = getWeek(date);

    if (!groupedData[week]) {
      groupedData[week] = [];
    }

    groupedData[week].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by months
const groupDataByMonth = (data) => {
  const groupedData = {};

  for (const [index, value] of data.entries()) {
    const date = value.date.toDate();
    const formattedMonth = format(date, "MM/yyyy");

    if (!groupedData[formattedMonth]) {
      groupedData[formattedMonth] = [];
    }

    groupedData[formattedMonth].push(value);
  }

  return groupedData;
};

// Function to convert map data to the desired format by years
const groupDataByYear = (data) => {
  const groupedData = {};

  for (const [index, value] of data.entries()) {
    const date = value.date.toDate();
    const formattedYear = format(date, "yyyy");

    if (!groupedData[formattedYear]) {
      groupedData[formattedYear] = [];
    }

    groupedData[formattedYear].push(value);
  }

  return groupedData;
};

export {groupDataByDay, groupDataByWeek, groupDataByMonth, groupDataByYear};
