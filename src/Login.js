import React, { Component } from 'react';
import { Tabs } from 'antd';
import './Login.css';
import Login from './components/login'
import Register from './components/register'

const TabPane = Tabs.TabPane;

class LoginPage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="登陆" key="1">
                    <Login history={this.props.history} onHandleAuth = {this.props.onHandleAuth}></Login>
                </TabPane>
                <TabPane tab="注册" key="2">
                    <Register></Register>
                </TabPane>
            </Tabs>
        );
    }
}

export default LoginPage;
