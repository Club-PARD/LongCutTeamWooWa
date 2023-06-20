import React from 'react';
import './SingleScrollView.css';

const SingleScrollView = ({ children }) => {
  return (
    <div className="single-scroll-view">
      <div className="scroll-content">{children}</div>
    </div>
  );
};

export default SingleScrollView;
