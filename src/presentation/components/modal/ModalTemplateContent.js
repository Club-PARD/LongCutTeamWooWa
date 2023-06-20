import ModalContent2 from "./ModalContent2";
import {Divider, DashedDivider} from "../commons/Divider";
import VerticalSpacing from "../commons/VerticalSpacing";

const ModalTemplateContent = () => {
    return (<>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <ModalContent2/>
        <VerticalSpacing height={21}/>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <ModalContent2/>
    </>);
}

export default ModalTemplateContent;