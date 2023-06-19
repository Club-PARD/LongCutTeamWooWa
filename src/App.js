import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import HomePage from './presentation/pages/HomePage';

 function App() {
  return (
    <Router>
         <Routes>
             <Route path="/" element={<HomePage />} />
         </Routes>
     </Router>
  );
}

export default App;
