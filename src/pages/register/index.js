import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import{ Form, Button, Input } from 'antd';
import { auth } from "../../services/firbase"; 
import "./index.css"

class Register extends React.Component{
        constructor(){
            super();
            this.state={
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                loading:false
            }
        }

        handleChangeInput=e=>{
            const {name,value} = e.target;
            this.setState({
                [name]:value
            });
        }

        handleRegister = async e=>{
            e.preventDefault();
            this.setState({
                loading:true
            });

            const {email,password} =this.state;
          try{
            await createUserWithEmailAndPassword(auth,email,password);
          }catch{
            console.log('error')
          }finally{
            this.setState({
                loading:false
            })
          }
           
        }

    render(){
        const{loading} = this.state
        return(

            <div className="auth_container">

            <Form layout="vertical">

                <Form.Item label htmlFor="First Name">
                    <p>First</p>
                    <Input name="firstName" type="text" placeholder="First Name" onChange = {this.handleChangeInput}/>
                </Form.Item>

                <Form.Item htmlFor="Last Name">
                    <p>Last</p>
                    <Input name="lastName" type="text" placeholder="Last Name" onChange = {this.handleChangeInput}/>
                </Form.Item>

                <Form.Item htmlFor="email">
                    <p>Email</p>
                    <Input name="email" type="email" placeholder="Email " onChange = {this.handleChangeInput}/>
                </Form.Item>

                <Form.Item htmlFor="password">
                    <p>Password</p>
                    <Input.Password name="password" type="password" placeholder="Password" onChange = {this.handleChangeInput}/>
                </Form.Item>

                
                <Button onClick={this.handleRegister} type="primary" loading={loading}>Register</Button>
            </Form>
             
        </div>
        )
    }
}


export default Register