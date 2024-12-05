import { Button } from "antd";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import AddIssueModal from "../../components/sheard/IssuieModal/Add";
import EditIssueModal from "../../components/sheard/IssuieModal/Edit";
import { fetchIssueData } from "../../state-management/slices/issues";
import './index.css';

const Cabinet=()=>{
    const dispatch = useDispatch();
    const [showModal,setShowModal] = useState(false);
    const {data,isLoading} = useSelector((store)=>store.issues);
    const [editModalData,setEditModalData] = useState(null)

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
          { 
          Boolean(editModalData) &&
           <EditIssueModal 
           data= {editModalData}
           isOpen={Boolean(editModalData)} 
           onClose={()=>setEditModalData(null)}/>
           }
           <AddIssueModal 
           onClose = {handleClose} 
           isOpen={showModal}/>
            {/* Todo */}
           <div className="board_container">
                  <ul>
                    {
                        data.map((item)=>{
                            return(
                            <li key = {item.taskId} onClick={()=>setEditModalData(item)}>
                                {item.issueName}
                            </li>)
                        })
                    }
                  </ul>

           </div>
        </div>
    )
}

export default Cabinet;