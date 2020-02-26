import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import FormPanel from '../components/FormPanel';
import Logo from '../components/Logo';

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
        <Logo textColor={'#2196f3'} borderColor={'#2196f3'} text={'LEONURUS'} />
        {location.state && <div className="not_authorized">{location.state.message}</div>}
        <FormPanel
          btnText={'Sign In'}
          submitCallback={handleSubmit}
          model={loginModel}
          loading={user.loading}
          error={user.error}
        >
          <NavLink to="/forgot_password" className="forgot-password">
            Forgot password?
          </NavLink>
        </FormPanel>
        <div className="registration">
          Don't have an account? <NavLink to="/register"> Sign up now </NavLink>
        </div>
      </div>
    </>
  );
};

export default connect(
  null,
  { login }
)(LoginPage);
