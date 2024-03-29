import HashTag from "./HashTag";
import React, { useState } from "react";
import { useUpdateTimelineData } from "../../../service/providers/timeline_data_provider";
import { styled } from "styled-components";

const HashDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-bottom: 6px;
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
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.color.disabled2};
`;

const HashTagSelection = ({ hashTagList }) => {
  const [selectedHashs, setSelectedHashs] = useState([]);
  const updateDataInput = useUpdateTimelineData();
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
