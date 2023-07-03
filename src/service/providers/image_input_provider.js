import React, { createContext, useContext, useState } from "react";

// Create a context for the inputData state
const ImageInputContext = createContext();

// Create a DataInputProvider component to provide the context value
const ImageInputProvider = ({ children }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const getBase64Representation = (file) =>
  new Promise((resolve, reject) => {
    if (!(file instanceof Blob)) {
      reject(new Error("Invalid file object"));
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64Representation(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
  };

  // Function to update the inputData state
  const updateImageInput = (name, value) => {
    if(name === "image"){
      console.log(typeof(value));
      handlePreview(value);
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
