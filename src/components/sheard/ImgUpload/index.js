import { useState } from "react";
import { storage } from "../../../services/firebase";
import { ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import { Upload,Button,message,Progress,Image } from "antd";
import { UploadOutlined } from '@ant-design/icons';


const ImgUpload = ()=>{
    const [progress,setProgress] = useState(0);
    const [uploading,setUploading] = useState(false);
    const [url,setUrl] = useState('')

    const handleUpload = ({file})=>{ //TODO
        setUploading(true);
        const storageRef = ref(storage,`profleImages/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef,file);

        uploadTask.on('state_changed',
        (snapshot)=>{
            const progressValue = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setProgress(progressValue);
        },
        (error)=>{
            setUploading(false);
            setProgress(0);
            message.error(`Error uploading file ${error.message}`)
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref)
            .then((imgUrl)=>{
                setUploading(false);
                setProgress(0);
                setUrl(imgUrl)
                message.success('Upload successfull');
            })
        }
        );
    }
    return(
        <div>
          <Upload
    customRequest={handleUpload}
    showUploadList={false}
    >
        <Button disabled = {uploading} icon = {<UploadOutlined />}>
            {uploading ?'Uploading...':'Upload Image'}
        </Button>
    </Upload>

    { uploading  && <Progress percent = {progress} /> }
    { url && <div><Image width = {100} src = {url} /></div> }
    
        </div>
    )
}

export default ImgUpload;