import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import FormPanel from '../components/FormPanel';

import registerModel from '../models/registerModel';
import { register } from '../actions/user';

import 'styles/_pages/login.scss';

const RegisterPage = ({ register, isLoading, user, error }) => {
  const handleSubmit = () => {
    let payload = {};
    registerModel.map(item => (payload[item.name] = item.value));
    register(payload);
  };

  return (
    <div className="page__login-wrapper">
      <Logo textColor={'#2196f3'} borderColor={'#2196f3'} text={'LEONURUS'} />
      {user.name ? (
        <>
          <span className="page__login-wrapper__welcome">
            Hi, <strong>{user.name}</strong>!
          </span>
          <span className="page__login-wrapper__info">
            We sent a confirmation letter on your email <strong>{user.email}</strong>, use link there to confirm
            registration.
          </span>
          <NavLink to="/">Go to homepage</NavLink>
        </>
      ) : (
        <>
          <FormPanel
            btnText={'Register'}
            submitCallback={handleSubmit}
            model={registerModel}
            loading={isLoading}
            error={error}
          />
          <div className="registration">
            Already have an account? <NavLink to="/login"> Sign in now </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(
  state => ({ isLoading: state.user.loading, error: state.user.error, user: state.user.user }),
  { register }
)(RegisterPage);
