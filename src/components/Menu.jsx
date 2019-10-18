import React from 'react';
import { ReactComponent as Logo } from '../styles/images/dashboard.svg';
const Menu = () => {
  return (
    <div className="page__dashboard-menu">
      <div className="page__dashboard-menu__item-main"><Logo />Dashboard</div>
    </div>
  );
};

export default Menu;
