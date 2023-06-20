import ModalContent2 from "./ModalContent2";
import {Divider, DashedDivider} from "../Divider";
import VerticalSpacing from "../VerticalSpacing";

const ModalTemplateContent = () => {
    return (<>
        <ModalContent2/>
        <VerticalSpacing height={21}/>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <ModalContent2/>
    </>);
}

export default ModalTemplateContent;