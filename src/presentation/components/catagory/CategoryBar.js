import React, { useEffect, useState } from "react";
import HashTagSelection from "./HashTagSelection";
import { styled } from "styled-components";
import CategoryTagSelection from "./CategoryTagSelection";
import { hashs, FetchUserTags} from "../../../constants/tags";
import { useUser } from "../../../service/providers/auth_provider";


const Div = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 77px;
  padding-right: 23px;
  border-right: 1px solid #ccc;
  width: 170px;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 80px;
`;

const CategoryBar = () => {
  const [fetchTags, setFetchTags] = useState(null);
  const user = useUser();
  useEffect(()=> {
    FetchUserTags(user.uid).then((value) => setFetchTags(value));
  }, []);
  return (
    <Div>
      {fetchTags ? <CategoryTagSelection title={"Category"} categoryTagList={fetchTags} /> : <>태그 불러오는 중...</>}
      
      <HashTagSelection hashTagList={hashs} />
    </Div>
  );
};

export default CategoryBar;
