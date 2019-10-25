import React from 'react';
import { ReactComponent as Logo } from '../background1.ai.svg';

const LoginLayout = props => (
  <div className="page">
    <div className="page__login">
      <Logo />
      {props.children}
    </div>
  </div>
);

export default LoginLayout;
