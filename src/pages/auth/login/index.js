import { useState } from 'react';
import { Form, Input, Button,notification } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/firebase';
import { ROUTE_CONSTANTS } from '../../../core/utils/constants';
import AuthWrapper from '../../../components/sheard/AuthWrapper';
import  loginBanner from '../../../core/images/login-auth.jpg'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserProfileInfo } from '../../../state-management/slices/userProfile';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [ form] = Form.useForm();
  
    const handleLogin = async values => {
      setLoading(true);
      try {
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        form.resetFields();
       dispatch(fetchUserProfileInfo());
  
      }catch (error) {
        notification.error({
          message: 'Invalid Login Credentials',
        });
      } finally {
        setLoading(false);
      }
    };
  
  
    return (
      <AuthWrapper title="Sign in" banner={loginBanner}>
        <Form layout="vertical" form={form} onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              }
            ]}
          >
            <Input type="email" placeholder="Email"/>
          </Form.Item>
  
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password placeholder="Password"/>
          </Form.Item>
  
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
  
          <Link to={ROUTE_CONSTANTS.REGISTER}>Create account</Link>
        </Form>
      </AuthWrapper>
    )
  }
  
  
  export default Login;