import ModalSheet from "./presentation/components/modal/ModalSheet";
import ModalTagSelection from "./presentation/components/modal/ModalTagSelection";
import PopUp from "./presentation/components/popup/PopUp";
import save_icon from "./assets/img/popup_save";

const TestPage = () => {
    return (
        
       <PopUp 
        imgSrc="save_icon" 
        text1={"경험 기록이 저장되었습니다."} 
        text2={"이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!"}
        />
    );
}

export default TestPage;