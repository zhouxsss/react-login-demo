import React, { Component } from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import '../Login.css';

const FormItem = Form.Item;



class LoginForm extends Component {
    constructor(props){
        super(props);
    }
    success = (msg) => {
        message.success(msg);
    }

    error = (msg) => {
        message.error(msg);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.handleLogin(values);
            }
        });
    }


    handleLogin = (obj) => {
        const storage = window.localStorage;
        const userStr = storage.getItem(obj.userName);
        if(!userStr){
            this.error('该用户不存在');
            return
        }
        const userObj = JSON.parse(userStr);
        if(userObj.password === obj.password){
            //登陆成功
            this.props.onHandleAuth(userObj);
            this.props.history.push("/product");
        } else {
            this.error('密码错误');
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(LoginForm);

export default Login;