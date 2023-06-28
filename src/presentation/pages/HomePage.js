import React, { useState } from "react";
import styled from "styled-components";
import CategoryBuilder from "../components/catagory";
import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
import DateRange from "../components/DateRange";
import Timeline from "../components/timeline/index";

function HomePage() {
  return (
    <div>
      <GlobalNavBar />
      {/* <DateRange /> */}
      <div style={{ display: "flex" }}>
        <CategoryBuilder />
        <div style={{ display: "flex", flexDirection: 'column', width: "100%", overflowX: 'hidden', }}>
          <Header />
          <Timeline />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
