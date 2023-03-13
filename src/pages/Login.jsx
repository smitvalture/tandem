import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from "react";
import logo from '../assets/images/tandem_logo.svg'
import { Alert } from 'antd';
import './Login.css'


const App = () => {
    const [error, setError] = useState("You have an error while logging in.");
    console.log(error);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='bg-gray-200 py-5 px-8'>
            <Link to={"/"}>
                <img className='' src={logo} alt="tandem_img" />
            </Link>

            <section className='font-Poppins w-full h-[calc(100vh-78px)] bg-gray-200 flex justify-center items-center'>
                <div className='bg-gray-100 w-[368px] py-5 px-10 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <h1 className='text-3xl lap:text-5xl font-bold mb-10 text-center'>Login</h1>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email or Number!',
                                },
                            ]}
                        >
                            <Input
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email or phone no." />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item className='flex justify-between'>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot ml-1 tab:ml-5 lap:ml-12" href="">
                                Forgot password ?
                            </a>
                        </Form.Item>

                        {/* Error message */}
                        {
                            error && <Alert
                                className='w-60 tab:w-64 lap:w-72 mb-7 h-fit'                    
                                description={error}
                                type="error"
                                showIcon
                                closable
                                onClose={() => setError("")}
                            />

                        }

                        <Form.Item>
                            <Button htmlType="submit" className="login-form-button bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide border border-1 border-[#15213A]">
                                Log in
                            </Button>
                        </Form.Item>
                        <Form.Item className='-mt-5'>
                            Or <Link to="/signup">register now!</Link>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );
};
export default App;