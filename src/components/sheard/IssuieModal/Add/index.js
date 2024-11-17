import { Modal,Form,notification } from "antd";
import { useState } from "react";
import ModalForm from "../Form";
import { doc,setDoc} from 'firebase/firestore';
import { db } from '../../../../services/firebase';
import { FIRESTORE_PATH_NAMES } from "../../../../core/utils/constants";
import { generateUid } from "../../../../core/helpers/generateUid";

const AddIssueModal = ({isOpen,onClose})=>{
    const [form] = Form.useForm();
    const [buttonLoading,setButtonLoading] = useState(false);
    const handleCreateIssue = async(values)=>{
        setButtonLoading(true)
        const taskId = generateUid()

        const taskModal = {
            taskId,
            ...values,
            date:new Date().toLocaleDateString()
        }
        try{
            const createDoc = doc(db,FIRESTORE_PATH_NAMES.ISSUES,taskId)
            await setDoc(createDoc,taskModal)
            onClose();
            form.resetFields();
            notification.success({
                message:'Your task me been created '
            })
        }catch{
            notification.error({
                message:'Error Ops'
            })
        }finally{
            setButtonLoading(false)
        }
    }
    const handleClose = ()=>{
        onClose();
        form.resetFields();
    }
    return(
       <Modal
        title = 'Create Issue'
        open= {isOpen}
        width={600}
        onCancel={handleClose}
        okText = 'Create Issue'
        centered
        confirmLoading = {buttonLoading}
        onOk={form.submit}
       >
        <ModalForm  form = {form} onFinish={handleCreateIssue}/>
       </Modal>
    )
}

export default AddIssueModal;