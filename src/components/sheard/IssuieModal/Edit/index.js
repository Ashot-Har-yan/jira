import { Modal,Form,notification } from "antd";
import ModalForm from "../Form";
import { useEffect,useState } from "react";
import { db } from "../../../../services/firebase";
import { doc,updateDoc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../../core/utils/constants";
import { useDispatch } from "react-redux";
import { fetchIssueData } from "../../../../state-management/slices/issues";

const EditIssueModal = ({isOpen,onClose,data})=>{
    const [buttonLoading,setButtonLoading] =useState(false)
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const handleEditIsuue = async(formData)=>{
        setButtonLoading(true)
       try{
        const{taskId} = data
        const issueDocRef = doc(db,FIRESTORE_PATH_NAMES.ISSUES,taskId)
        await updateDoc(issueDocRef,formData);
        notification.success({
            message:'Issue data successfully updated'
        })
        dispatch(fetchIssueData())
        onClose();
       }catch{
        notification.error({
            message:'Error editting'
        })
       }finally{
        setButtonLoading(false)
       }
    }

    useEffect(()=>{
            form.setFieldsValue(data);
    },[data,form])

    return(
        <Modal
        title = "Edit Issue"
        open = {isOpen}
        width={600}
        okText = 'Edit Issue'
        centered
        onCancel = {onClose}
        onOk={form.submit}
        loading= {buttonLoading}
        >
            <ModalForm
            form= {form}
            onFinish={handleEditIsuue}
            />
        </Modal>

    )
};

export default EditIssueModal