import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/firebase';
import { ROUTE_CONSTANTS } from '../../../core/utils/constants';
import { Link } from 'react-router-dom';
import AuthWrapper from '../../../components/sheard/AuthWrapper';
import  loginBanner from '../../../core/images/login-auth.jpg'

const Login = ()=>{
    const [loading,setLoading] = useState(false)
    const [ form ] = Form.useForm();
    const handleLogin =  async values => {
        setLoading(true)

    try{
        const { email,password} = values;
         await signInWithEmailAndPassword(auth,email,password);
        form.resetFields();

    }catch(error){
        console.log(error)
    }finally{
        setLoading(false)
    }
  };
   
    return(
        <AuthWrapper title = 'Login' banner = {loginBanner}>
           <Form layout='vertical' form ={form} onFinish={handleLogin}>
            <Form.Item 
            label = "Email" 
            name = "email" 
            rules={[
                {
                    required:true,
                    message:"Please input your email"
                }
            ]}
            >
                <Input type = 'email' placeholder='Email'/>
            </Form.Item>

            <Form.Item
             label = "Password"
             name= 'password'
             tooltip = 'Password must be min6 max 16 characters ...'
             rules={[
                {
                    required:true,
                    message:"Please input your password"
                }
            ]}
        >
                <Input.Password placeholder='Password'/>
            </Form.Item>

            <Button type = "primary" htmlType='submit' loading = {loading}>
                Sign in
            </Button>

            <Link to = {ROUTE_CONSTANTS.REGISTER}>
                Sign up
            </Link>
           </Form>
        </AuthWrapper>
    )
}
export default Login;