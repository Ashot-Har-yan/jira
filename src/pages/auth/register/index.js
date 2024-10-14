import React,{ useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Input,Flex } from 'antd';
import { auth } from '../../../services/firebase';
import { regexpValidation,ROUTE_CONSTANTS } from '../../../core/utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import AuthWrapper from '../../../components/sheard/AuthWrapper';
import registerBanner from '../../../core/images/register-auth.jpg'

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
        <AuthWrapper title= 'Register' banner = {registerBanner}>
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
                <Form.Item
                    label = "Config password"
                    name = "config"
                    dependences = {['password']}
                    rules = {[
                        {
                            required:true,
                            message:'Please inpot your password'
                        },
                        ({getFieldValue})=>({
                            validator(_,value){
                                if(!value || getFieldValue('password') === 'value'){
                                    return Promise.resolve()
                                }
                                return Promise.reject(new Error('The new password that you entered doesnt match'))
                            }
                        })
                    ]}
                    >
                        <Input.Password placeholder='Config password' />
                </Form.Item>

                <Flex align = 'flex-end' gap = '10px' justify = 'flex-end'>
                <Link to = {ROUTE_CONSTANTS.LOGIN}>
                    Sign in
                </Link>
                <Button type ='primary' htmlType='submit' loading = {loading}>
                    Sign up
                </Button>
                </Flex>
            </Form>
             
        </AuthWrapper>
    )
}

export default Register;