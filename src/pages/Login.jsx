import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from '../background1.ai.svg';
import FormPanel from '../components/FormPanel';

import '../styles/page-login.scss';
import loginModel from '../models/loginModel';
import registerModel from '../models/registerModel';

// todo: connect babel-eslint
class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      form: 'login',
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
      .then(res => {})
      .catch(e => {
        if (e.response.data.error) {
          this.setState({
            loginError: e.response.data.error,
            loading: false,
          });
        }
      });
  };

  render() {
    const { loading, form, loginError } = this.state;

    return (
      <div className="login-page">
        <div className="login-page__wrapper">
          <Logo />
          <div className="login-page__wrapper-form">
            <span className="login-page__wrapper-form-company">Leonurus Ltd.</span>
            {form === 'login' ? (
              <span onClick={() => this.setState({ form: 'register' })}> REGISTER </span>
            ) : (
              <span onClick={() => this.setState({ form: 'login' })}> LOGIN </span>
            )}
            <span className="login-page__wrapper-form-welcome">Welcome to Leo.CRUD</span>
            <FormPanel
              key={form}
              btnText={form === 'login' ? 'Sign In' : 'Register'}
              submitCallback={this.handleSubmit}
              model={form === 'login' ? loginModel : registerModel}
              loading={loading}
              error={loginError}
            />
            {form === 'login' && <span className="login-page__wrapper-form-reset">Forgot password?</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
