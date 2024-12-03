import { Button } from "antd";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import AddIssueModal from "../../components/sheard/IssuieModal/Add";
import { fetchIssueData } from "../../state-management/slices/issues";

const Cabinet=()=>{
    const dispatch = useDispatch();
    const [showModal,setShowModal] = useState(false);
    const {data,isLoading} = useSelector((store)=>store.issues)
    console.log(data,'store');

    useEffect(()=>{
        dispatch(fetchIssueData());
    },[])

    const handleOpenModal = ()=>{
        setShowModal(true)
    }
    const handleClose = ()=>{
        setShowModal(false)
    }

    return(
        <div>
           <Button  type="primary" onClick={handleOpenModal}>
            Create Issue
           </Button>
           <AddIssueModal onClose = {handleClose} isOpen={showModal}/>
        </div>
    )
}

export default Cabinet;