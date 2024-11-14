import { Modal,Form } from "antd";
import { useState } from "react";
import ModalForm from "../Form";

const AddIssueModal = ({isOpen,onClose})=>{
    const [form] = Form.useForm();
    const [buttonLoading,setButtonLoading] = useState(false);
    const handleCreateIssue = (values)=>{
        console.log(values);
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