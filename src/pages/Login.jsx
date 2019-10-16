import React from 'react';
import axios from 'axios';
import {ReactComponent as Logo} from '../background1.ai.svg';
import FormPanel from "../components/LoginForm";

import '../styles/page-login.scss';
import loginModel from "../models/loginModel";

const LoginPage = () =>  {
  const handleSubmit = () => {
    let payload = {};
    loginModel.forEach(item => (payload[item.name] = item.value));
    axios.post('users/login', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
    })
  };

  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <Logo />
        <div className="login-page__wrapper-form">
          <span className="login-page__wrapper-form-company">Leonurus Ltd.</span>
          <span className="login-page__wrapper-form-welcome">Welcome to Leo.CRUD</span>
          <FormPanel btnText="Sign in" submitCallback={handleSubmit} model={loginModel} />
          <span className="login-page__wrapper-form-reset">Forgot password?</span>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;