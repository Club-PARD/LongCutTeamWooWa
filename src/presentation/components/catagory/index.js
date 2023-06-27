import React from "react";
import CategoryBar from "./CategoryBar";
import { DataInputProvider } from "../../../service/providers/data_input_provider";

const CategoryBuilder = () => {
  return (
    <DataInputProvider>
      <CategoryBar/>
    </DataInputProvider>
  );
};
export default CategoryBuilder;
