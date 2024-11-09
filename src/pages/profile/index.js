import { useEffect,useState } from 'react';
import { Form , Input, Button,notification} from 'antd';
import { doc,updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { FIRESTORE_PATH_NAMES } from '../../core/utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUserProfileInfo } from '../../state-management/slices/userProfile';
import ImgUpload from '../../components/sheard/ImgUpload';
import './index.css';


const Profile = () => {
    const dispatch = useDispatch();
    const { authUserInfo: { userData } } = useSelector((store) => store.userProfile);
    const [ form ] = Form.useForm();
    const [ buttonLoading, setButtonLoading ] = useState(false);
    const { uid, ...restData } = userData;
  
    useEffect(() => {
      form.setFieldsValue(restData);
    }, [form, restData]);
  
    const handleEditUserProfile = async (values) => {
      setButtonLoading(true);
      try {
        const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
        await updateDoc(userDocRef, values);
        // dispatch(fetchUserProfileInfo())
        notification.success({
          message: 'User data successfully updated'
        });
      } catch (error) {
        notification.error({
          message: 'Error :('
        });
      } finally {
        setButtonLoading(false);
      }
    }
  
    return (
      <div className="form_page_container">
  
        <Form layout="vertical" form={form} onFinish={handleEditUserProfile}>
          <Form.Item
            label="Profile Image"
          >
            <ImgUpload />
          </Form.Item>
  
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your First Name!'
              }
            ]}
          >
            <Input
              placeholder="First Name"
            />
          </Form.Item>
  
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your Last Name!'
              }
            ]}
          >
            <Input
              placeholder="Last Name"
            />
          </Form.Item>
  
          <Form.Item
            label="Email"
            name="email"
          >
            <Input
              readOnly
              placeholder="Email"
            />
  
          </Form.Item>
  
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!'
              }
            ]}
          >
            <Input
              placeholder="Phone Number"
            />
  
          </Form.Item>
  
          <Button type="primary" htmlType="submit" loading={buttonLoading}>
            Submit
          </Button>
        </Form>
      </div>
    )
  };
  
  export default Profile;