import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import FormPanel from '../components/FormPanel';

import '../styles/page-login.scss';
import registerModel from '../models/registerModel';
import reduxActions from '../models/reduxActions';

class RegisterPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      registrationError: false,
      user: {},
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: reduxActions.USER_LOGIN });
  }

  handleSubmit = () => {
    let payload = {};
    registerModel.forEach(item => (payload[item.name] = item.value));

    this.setState({
      loading: true,
    });

    axios
      .post('users', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        this.setState({ ...res.data, loading: false });
      })
      .catch(e => {
        const code = e.response.data.code;
        this.setState({
          registrationError: code ? 'User already exists' : 'Unhandled error',
          loading: false,
        });
      });
  };

  render() {
    const { form, loading, registrationError, user } = this.state;

    return (
      <div className="page__login-wrapper">
        <span className="page__login-wrapper _header">Leonurus Ltd.</span>
        {user.name ? (
          <div key={form}>
            <span className="page__login-wrapper__welcome">
              Hi, <strong>{user.name}</strong>!
            </span>
            <span className="page__login-wrapper__info">
              We sent a confirmation letter on your email <strong>{user.email}</strong>, use link there to confirm
              registration.
            </span>
            <NavLink to="/">Go to homepage</NavLink>
          </div>
        ) : (
          <Fragment>
            <NavLink to="/login"> Login </NavLink>
            <span className="page__login-wrapper _subheader">Welcome to Leo.CRUD</span>
            <FormPanel
              key={form}
              btnText={'Register'}
              submitCallback={this.handleSubmit}
              model={registerModel}
              loading={loading}
              error={registrationError}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect()(RegisterPage);
