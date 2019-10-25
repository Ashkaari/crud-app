import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import FormPanel from '../components/FormPanel';
import loginModel from '../models/loginModel';
import { login } from '../actions/user';

import 'styles/_pages/login.scss';

const LoginPage = ({ location, login }) => {
  const user = useSelector(state => state.user);

  const handleSubmit = () => {
    let payload = {};
    loginModel.forEach(item => (payload[item.name] = item.value));

    login(payload);
  };

  return (
    <>
      {user._id && <Redirect to="/dashboard" />}
      <div className="page__login-wrapper">
        <span className="page__login-wrapper _header">Leonurus Ltd.</span>
        <NavLink to="/register"> REGISTER </NavLink>
        <span className="page__login-wrapper _subheader">Welcome to Leo.CRUD</span>
        {location.state ? location.state.message : ''}
        <FormPanel
          btnText={'Sign In'}
          submitCallback={handleSubmit}
          model={loginModel}
          loading={user.loading}
          error={user.error}
        />
        <NavLink to="/forgot_password" className="page__login-wrapper _info">
          Forgot password?
        </NavLink>
      </div>
    </>
  );
};

export default connect(
  null,
  { login }
)(LoginPage);
