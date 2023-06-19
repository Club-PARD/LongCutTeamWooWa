import Divider from "../Divider";
import ModalTagSelection from "./ModalTagSelection";
const tags = ['도전정신', '성취감', '동기부여', '학습', '자기존중', '문제 해결 능력', '협업', '리더십', '커뮤니케이션', '신체적', '정서적'];

const ModalSheet = ({isTemplate}) => {
    return (
        <>
            {/* <ModalHeader/> */}
            <Divider/>
            {/* <InputTitle/> */}
            {/* {isTemplate ? 
                <ModalWritingContent/> : 
                <ModalTemplateContent/>
            } */}
            <Divider/>
            <ModalTagSelection title={"태그 입력"} modalTagList={tags} width={400} hasButton={true}/>
            <Divider/>
            {/* <ModalButtons/> */}
        </>
    );
}

export default ModalSheet;