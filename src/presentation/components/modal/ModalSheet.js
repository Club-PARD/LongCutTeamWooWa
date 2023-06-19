import Divider from "../Divider";
import ModalTagSelection from "./ModalTagSelection";

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