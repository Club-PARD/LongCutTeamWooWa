import React, { useState } from "react";
import styled from "styled-components";
import CategoryBuilder from "../components/catagory";
import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
import DateRange from "../components/DateRange";

function HomePage() {
  return (
    <div>
      <GlobalNavBar />
      <Header />
      {/* <DateRange /> */}
      <CategoryBuilder />

    </div>
  );
}
export default HomePage;
