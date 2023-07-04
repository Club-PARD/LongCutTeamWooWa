import React from 'react';
 import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Hompage from "./presentation/pages/HomePage"
import "./index.css";
import "./assets/Fonts/Font.css"; //폰트적용 

import DisquiteCrawlerForm from './service/disquite_api_form.js'


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <ThemeProvider theme={theme}>
      {/* <DisquiteCrawlerForm/> */}
      <Hompage/>
   </ThemeProvider>
 );