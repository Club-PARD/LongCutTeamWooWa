import ModalContent2 from '../components/modal/ModalContent2';
import TmpSaveBtn from '../components/buttons/TmpSaveBtn';
import SubmitBtn from '../components/buttons/SubmitBtn';
import InputTitle from '../components/modal/InputTitle';
import React from "react";
function HomePage() {
    return (
        <div>
            <ModalContent2 />
            <TmpSaveBtn />
            <SubmitBtn buttonText={"기록하기"} />
            <InputTitle />
        </div>
    );
  }
  export default HomePage;
