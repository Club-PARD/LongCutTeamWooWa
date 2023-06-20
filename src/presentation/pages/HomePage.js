import ModalContent2 from '../components/modal/ModalContent2';
import TmpSaveBtn from '../components/modal/TmpSaveBtn';
import SubmitBtn from '../components/modal/SubmitBtn';
import InputTitle from '../components/modal/InputTitle';
import React from "react";
function HomePage() {
    return (
        <div>
            <ModalContent2 />
            <TmpSaveBtn />
            <SubmitBtn buttonText="기록하기" />
            <InputTitle />
        </div>
    );
  }
  export default HomePage;
