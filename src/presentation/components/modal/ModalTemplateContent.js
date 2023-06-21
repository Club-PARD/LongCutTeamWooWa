import ModalContent2 from "./ModalContent2";
import {Divider, DashedDivider} from "../commons/Divider";
import VerticalSpacing from "../commons/VerticalSpacing";
import SingleScrollView from "../commons/SingleScrollView";
const ModalTemplateContent = () => {
    return (<>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <SingleScrollView children={<ModalContent2/>}/>
        <VerticalSpacing height={21}/>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <SingleScrollView children={<ModalContent2/>}/>
        <VerticalSpacing height={21}/>
    </>);
}

export default ModalTemplateContent;