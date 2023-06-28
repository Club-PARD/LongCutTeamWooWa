import React, { useState } from "react";
import styled from 'styled-components';

import GlobalNavBar from "../components/Nav/GlobalNavBar";
import Header from "../components/header/Header";
function HomePage() {
    return (
        <div>
            <GlobalNavBar/>
            <Header/>
        </div>
    );
  }
  export default HomePage;
