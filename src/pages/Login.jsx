import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from '../background1.ai.svg';
import FormPanel from '../components/LoginForm';

import '../styles/page-login.scss';
import loginModel from '../models/loginModel';

// todo: connect babel-eslint
class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      loginError: false,
    };
  }

  handleSubmit = () => {
    let payload = {};
    loginModel.forEach(item => (payload[item.name] = item.value));

    this.setState({
      loading: true,
    });

    axios
      .post('users/login', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        if (e.response.data.error) {
          this.setState({
            loginError: e.response.data.error,
            loading: false
          });
        }
      });
  };

  render() {
    const { loading, loginError } = this.state;

    return (
      <div className="login-page">
        <div className="login-page__wrapper">
          <Logo />
          <div className="login-page__wrapper-form">
            <span className="login-page__wrapper-form-company">Leonurus Ltd.</span>
            <span className="login-page__wrapper-form-welcome">Welcome to Leo.CRUD</span>
            <FormPanel
              btnText="Sign in"
              submitCallback={this.handleSubmit}
              model={loginModel}
              loading={loading}
              error={loginError}
            />
            <span className="login-page__wrapper-form-reset">Forgot password?</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
