import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import LoginPage from './Login';
import Product from './Product';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer/index'

const store = createStore(reducer);
const rootEl = document.getElementById('root');


class Index extends React.Component {

  handleAuth(authInfo) {
    store.dispatch({ type: 'addAuth', playload: authInfo });
  }

  handleLogout() {
    store.dispatch({ type: 'removeAuth'});
  }

  render() {
    let state = store.getState();
    console.log(state)
    const auth = state.auth;
    const authInfo = state.authInfo;
    const PrivateRoute = ({component: Component, authed, authInfo, ...rest}) => {
      return (
        <Route
          {...rest}
          render={(props) => authed === true
            ? <Component {...props} authInfo={authInfo}/>
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}>
          {this.props.children}
        </Route>
      )
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={route => {
            return <LoginPage {...route} onHandleAuth={this.handleAuth}/>
          }}/>
          <PrivateRoute authed={auth} path='/product' component={Product} authInfo={authInfo}>
          </PrivateRoute>
        </div>
      </Router>
    )
  }
}

const render = () => ReactDOM.render((
  <Index/>
), rootEl);

render();
store.subscribe(render);

registerServiceWorker();
