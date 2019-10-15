import React, {Component} from 'react';
import {ReactComponent as Logo} from '../background1.ai.svg';

import '../styles/page-login.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-page__wrapper">
          <Logo />
          <div className="login-page__wrapper-form">
            <span className="login-page__wrapper-form-company">Leonurus Ltd.</span>
            <span className="login-page__wrapper-form-welcome">Welcome to Leonurus.CRUD</span>
            <div className="login-page__wrapper-form-group">
              <input type="text" name="email" required />
              <span className="bar"/>
              <label>Email</label>
            </div>
            <div className="login-page__wrapper-form-group">
              <input type="password" name="password" required />
              <span className="bar"/>
              <label>Password</label>
            </div>
            <button className="login-page__wrapper-form-button">
              Sign in
            </button>
            <span className="login-page__wrapper-form-reset">Forgot password?</span>

          </div>
        </div>
      </div>
    )
  }
}