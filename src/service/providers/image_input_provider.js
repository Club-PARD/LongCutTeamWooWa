import React, { createContext, useContext, useState } from "react";

// Create a context for the inputData state
const ImageInputContext = createContext();

// Create a DataInputProvider component to provide the context value
const ImageInputProvider = ({ children }) => {
  const [previewImage, setPreviewImage] = useState(null);

  // Function to update the inputData state
  const updateImageInput = (name, value) => {
    if(name === "image"){
      setPreviewImage(value);
    }
  };

  return (
    <ImageInputContext.Provider value={[updateImageInput, previewImage]}>
      {children}
    </ImageInputContext.Provider>
  );
};

// Custom hook to access the updateDataInput function
const useUpdateImageInput = () => useContext(ImageInputContext)[0];

// Custom hook to access the inputData state
const useImageInput = () => {
  const previewImage = useContext(ImageInputContext)[1];
  return previewImage;
};

export { ImageInputProvider, useUpdateImageInput, useImageInput};
