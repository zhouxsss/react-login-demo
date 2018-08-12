import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import './index.css';
import App from './App';
import LoginPage from './Login';
import Product from './Product';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component{
    constructor(props){
        super(props)
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {auth: false, authInfo: {}}
    }
    handleAuth(authInfo){
        this.setState({auth: true,authInfo});
    }
    handleLogout(){
        this.setState({auth: false});
    }
    render() {
        const auth = this.state.auth;
        const authInfo = this.state.authInfo;
        const PrivateRoute = ({component: Component, authed, ...rest}) => {
            return (
                <Route
                    {...rest}
                    render={(props) => authed === true
                        ? <Component {...props} />
                        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
            )
        }
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/login"  component={() => <LoginPage onHandleAuth = {this.handleAuth} />}/>
                    <PrivateRoute authed={auth} path='/product' component = {Product} authInfo={authInfo} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render((
    <Index/>
), document.getElementById('root'));
registerServiceWorker();
