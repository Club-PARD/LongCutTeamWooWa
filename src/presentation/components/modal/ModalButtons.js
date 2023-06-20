import React from 'react';
import SubmitBtn from '../buttons/SubmitBtn';
import TmpSaveBtn from '../buttons/TmpSaveBtn';

const ModalButtons = () => {
  return (
    <div className="button-wrapper">
      <TmpSaveBtn/>
      <SubmitBtn buttonText={"기록하기"}/>
      
    </div>
  );
};

export default ModalButtons;