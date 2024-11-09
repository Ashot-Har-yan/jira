import { useState } from "react";
import { storage,db } from "../../../services/firebase";
import { doc,updateDoc } from "firebase/firestore";
import { ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import { Upload,message,notification,Progress,Image } from "antd";
import { STORAGE_PATH_NAMES,FIRESTORE_PATH_NAMES } from "../../../core/utils/constants";
import { useSelector,useDispatch } from "react-redux";
import { setProfileImgUrl } from "../../../state-management/slices/userProfile";
import { PlusOutlined } from '@ant-design/icons';


const ImgUpload = () => {
    const { userData: { uid, imgUrl } } = useSelector(store => store.userProfile.authUserInfo);
    const dispatch = useDispatch();
  
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
  
    const updatedUserProfileImg = async (imgUrl) => {
      try {
        const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
        await updateDoc(userDocRef, { imgUrl });
      }catch {
        notification.error({
          message: 'Error :('
        });
      }
    }
    const handleUpload = ({ file }) => { //TODO
      setUploading(true);
      const storageRef = ref(storage, `${STORAGE_PATH_NAMES.PROFILE_IMAGES}/${uid}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed',
        (snapshot) => {
          const progressValue = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progressValue);
        },
        (error) => {
          setUploading(false);
          setProgress(0);
          message.error(`Error uploading file ${error.message}`)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((imgUrl) => {
              setUploading(false);
              setProgress(0);
  
              updatedUserProfileImg(imgUrl);
              dispatch(setProfileImgUrl(imgUrl));
              message.success('Upload successful!');
            })
        }
      );
    }
  
    const uploadButton = (
      <button style={{ border: 0, background: 'none' }} type="button">
        {uploading ? <Progress type="circle" size={80} percent={progress}/> : <PlusOutlined />}
      </button>
    );
  
    return (
      <div>
        <Upload
          customRequest={handleUpload}
          showUploadList={false}
          listType="picture-card"
        >
          {imgUrl ? <Image width={100} src={imgUrl} /> : uploadButton}
        </Upload>
      </div>
    )
  };
  
  export default ImgUpload;
  
  