import React,{ useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Input } from 'antd';
import { auth } from '../../services/firebase';
import { regexpValidation,ROUTE_CONSTANTS } from '../../core/utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Register = ()=>{
    const [loading,setLoading] = useState(false);
    const [form] = Form.useForm()
    const navigate = useNavigate();

    const handleRegister = async values => {
        setLoading(true)
        const {email,password} = values;
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            navigate(ROUTE_CONSTANTS.LOGIN)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className='auth_container'>
            <Form layout='vertical' form={form} onFinish={handleRegister}>
                <Form.Item 
                label ='First Name' 
                name='firstName'
                rules={[
                    {
                        required:true,
                        message:"Please input your First Name"
                    }
                ]}
                >
                <Input type = 'text' placeholder='First Name' />
                </Form.Item>
            
                <Form.Item 
                label ='Last Name'
                 name='lastName'
                 rules={[
                    {
                        required:true,
                        message:"Please input your Last Name"
                    }
                ]}
                 >
                <Input type = 'text' placeholder='Last Name' />
                </Form.Item>

                <Form.Item
                 label ='Email'
                  name='email'
                  rules={[
                    {
                        required:true,
                        message:"Please input your Email"
                    }
                ]}
                  >
                <Input type = 'email' placeholder='Email' />
                </Form.Item>

                <Form.Item
                 label ='Password'
                  name='password'
                  rules={[
                    {
                        required:true,
                        message:"Please input your password"
                    },
                    {
                        pattern: regexpValidation,
                        message:'Wrong password'
                    }
                ]}
                  >
                <Input.Password placeholder='Password' />
                </Form.Item>
                <Button type ='primary' htmlType='submit' loading = {loading}>
                    Sign up
                </Button>
                <Link to = {ROUTE_CONSTANTS.LOGIN}>
                    Sign in
                </Link>
            </Form>
             
        </div>
    )
}

export default Register;