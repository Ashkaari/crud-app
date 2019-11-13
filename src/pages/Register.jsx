import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/user';
import FormPanel from '../components/FormPanel';
import registerModel from '../models/registerModel';

import 'styles/_pages/login.scss';

const RegisterPage = ({ register, isLoading, user, error }) => {
  const handleSubmit = () => {
    let payload = {};
    registerModel.map(item => (payload[item.name] = item.value));
    register(payload);
  };

  return (
    <div className="page__login-wrapper">
      <span className="page__login-wrapper _header">Leonurus Ltd.</span>
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
          <NavLink to="/login"> Login </NavLink>
          <span className="page__login-wrapper _subheader">Welcome to Leo.CRUD</span>
          <FormPanel
            btnText={'Register'}
            submitCallback={handleSubmit}
            model={registerModel}
            loading={isLoading}
            error={error}
          />
        </>
      )}
    </div>
  );
};

export default connect(
  state => ({ isLoading: state.user.loading, error: state.user.error, user: state.user.user }),
  { register }
)(RegisterPage);
