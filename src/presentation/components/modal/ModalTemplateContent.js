import ModalContent2 from "./ModalContent2";
import {Divider, DashedDivider} from "../commons/Divider";
import VerticalSpacing from "../commons/VerticalSpacing";
import SingleScrollView from "../commons/SingleScrollView";
import { useUpdateDataInput } from "../../../service/providers/data_input_provider";
const ModalTemplateContent = () => {
    
    const updateDataInput = useUpdateDataInput();
    const handleInputChange = (name, value) => {
        updateDataInput(name, value);
    };
    return (<>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <SingleScrollView children={<ModalContent2 onChange={(value) => handleInputChange("add-template-1", value)}/>}/>
        <VerticalSpacing height={21}/>
        <DashedDivider/>
        <VerticalSpacing height={21}/>
        <SingleScrollView children={<ModalContent2 onChange={(value) => handleInputChange("add-template-2", value)}/>}/>
        <VerticalSpacing height={21}/>
    </>);
}

export default ModalTemplateContent;