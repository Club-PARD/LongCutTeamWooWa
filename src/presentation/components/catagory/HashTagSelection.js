import HashTag from "./HashTag";
import React, { useState } from "react";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
import { styled } from "styled-components";

const HashDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  margin-bottom: 14px;
  align-items: flex-start;
  
  & > * + * {
    margin-top: 10px;
  }
`;

const BarDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  // margin-left: 77px;
  align-items: flex-start;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.color.disabled2};
`;

const HashTagSelection = ({ hashTagList }) => {
  const [selectedHashs, setSelectedHashs] = useState([]);
  const updateDataInput = useUpdateDataInput();
  const handleInputChange = (name, value) => {
    updateDataInput(name, value);
  };

  const handleTagClick = (hash) => {
    const isHashSelected = selectedHashs.includes(hash);
    let updatedHashs;

    if (isHashSelected) {
      updatedHashs = selectedHashs.filter(
        (selectedHash) => selectedHash !== hash
      );
    } else {
      updatedHashs = [...selectedHashs, hash];
    }

    setSelectedHashs(updatedHashs);
    handleInputChange("selected-hashs", updatedHashs);
  };

  return (
    <BarDiv>
      <Divider />
      <HashDiv>
        {hashTagList.map((hash, index) => (
          <HashTag
            key={index}
            hash={hash}
            onClick={() => {
              handleTagClick(hash);
            }}
          />
        ))}
      </HashDiv>
      <Divider />
    </BarDiv>
  );
};

export default HashTagSelection;
