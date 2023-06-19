import ModalContent2 from '../components/ModalContent2';
import TmpSaveBtn from '../components/TmpSaveBtn';
import SubmitBtn from '../components/SubmitBtn';
import InputTitle from '../components/InputTitle';

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