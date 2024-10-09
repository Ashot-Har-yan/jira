import { useState } from 'react';
import { Form, Button, Input } from 'antd';
import './index.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { regexpValidation } from '../../core/utils/constants';

const Register = ()=>{
    const [loading,setLoading] = useState(false);
    const [form] = Form.useForm()

    const handleRegister = async values=>{
        setLoading(true)
        const {email,password} = values;
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }catch (e){
            console.log(e)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className='auth_container'>
            <Form layout='vertical' form={form} onFinish={handleRegister}>
                <Form.Item 
                label ='First Name' 
                name='FirstName'
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
                 name='LastName'
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
                    Sign in
                </Button>
            </Form>
             
        </div>
    )
}

export default Register