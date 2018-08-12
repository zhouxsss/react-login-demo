import React, { Component } from 'react';
import { Form, Icon, Input, Button , message } from 'antd';
import '../Login.css';

const FormItem = Form.Item;

class RegisterForm extends Component {

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
                console.log('Received values of form: ', values);
                this.handleRegister(values);
            }
        });
    }

    handleRegister = (obj) => {
        const storage = window.localStorage;
        const userName = obj.userName;
        if(storage.getItem(userName)){
            this.error('该用户已存在');
            return;
        }
        storage.setItem(userName, JSON.stringify(obj));
        this.success('注册成功，请登陆');
        this.handleReset();
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    passwordValidator = (rule, value, callback)=>{
        const form = this.props.form;
        if (form.getFieldValue('confirmPassword') && (form.getFieldValue('confirmPassword') !== form.getFieldValue('password'))) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
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
                        rules: [{ required: true, message: 'Please input your Password!' },
                            { validator: this.passwordValidator}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('confirmPassword', {
                        rules: [
                            { required: true, message: 'Please confirm your Password!' },
                            { validator: this.passwordValidator}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const Register = Form.create()(RegisterForm);

export default Register;