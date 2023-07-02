import { useState } from 'react';

const useFileSelection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const addFile = (file) => {
      setSelectedFile(file);
    };
  
    const removeFile = () => {
      setSelectedFile(null);
    };
  
    return [selectedFile, addFile, removeFile];
  };
  

export default useFileSelection;
