import React, { useState } from "react";

const ModalTag = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const tagStyle = {
    backgroundColor: isClicked ? "#ff0000" : "transparent",
    cursor: "pointer",
  };

  return (
    <div className="tag" style={tagStyle} onClick={handleClick}>
      {text}
    </div>
  );
};

export default ModalTag;
