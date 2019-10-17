import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import FormPanel from '../components/FormPanel';

import '../styles/page-login.scss';
import loginModel from '../models/loginModel';

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
      <div className="page__login-wrapper">
        <span className="page__login-wrapper _header">Leonurus Ltd.</span>
        <NavLink to="/register"> REGISTER </NavLink>
        <span className="page__login-wrapper _subheader">Welcome to Leo.CRUD</span>
        <FormPanel
          key={form}
          btnText={'Sign In'}
          submitCallback={this.handleSubmit}
          model={loginModel}
          loading={loading}
          error={loginError}
        />
        <NavLink to="/forgot_password" className="page__login-wrapper _info">
          Forgot password?
        </NavLink>
      </div>
    );
  }
}

export default LoginPage;
