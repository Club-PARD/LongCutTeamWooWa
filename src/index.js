import React from 'react';
 import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Hompage from "./presentation/pages/HomePage"



 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <ThemeProvider theme={theme}>
      <Hompage/>
   </ThemeProvider>
 );