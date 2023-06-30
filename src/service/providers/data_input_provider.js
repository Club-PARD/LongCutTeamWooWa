import React, { createContext, useContext, useState } from "react";

// Create a context for the inputData state
const DataInputContext = createContext();

// Create a DataInputProvider component to provide the context value
const DataInputProvider = ({ children }) => {
  const [inputData, setInputData] = useState({});

  // Function to update the inputData state
  const updateDataInput = (name, value) => {
   
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <DataInputContext.Provider value={[updateDataInput, inputData]}>
      {children}
    </DataInputContext.Provider>
  );
};

// Custom hook to access the updateDataInput function
const useUpdateDataInput = () => useContext(DataInputContext)[0];

// Custom hook to access the inputData state
const useDataInput = () => {
  const inputData = useContext(DataInputContext)[1];
  return inputData;
};

export { DataInputProvider, useUpdateDataInput, useDataInput };
