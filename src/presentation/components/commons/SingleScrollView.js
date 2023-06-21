import React from 'react';
import './SingleScrollView.css';

const SingleScrollView = ({ children, height}) => {
  return (
    <div className="single-scroll-view" style={{'--frame-height': `${height}px` }}>
      <div className="scroll-content">{children}</div>
    </div>
  );
};

export default SingleScrollView;
