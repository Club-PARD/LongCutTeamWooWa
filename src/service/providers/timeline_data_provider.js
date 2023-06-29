import React, { createContext, useContext, useState } from "react";

// Create a context for the inputData state
const TimelineContext = createContext();

// Create a DataInputProvider component to provide the context value
const TimelineDataProvider = ({ children }) => {
  const [inputData, setInputData] = useState({});

  // Function to update the inputData state
  const updateTimelineData = (name, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(inputData);
  };

  return (
    <TimelineContext.Provider value={[updateTimelineData, inputData]}>
      {children}
    </TimelineContext.Provider>
  );
};

// Custom hook to access the updateDataInput function
const useUpdateTimelineData = () => useContext(TimelineContext)[0];

// Custom hook to access the inputData state
const useTimelineData = () => {
  const inputData = useContext(TimelineContext)[1];
  return inputData;
};

export { TimelineDataProvider, useUpdateTimelineData, useTimelineData };
