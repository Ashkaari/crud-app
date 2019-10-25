import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

import 'styles/_pages/dashboard.scss';

const DashboardLayout = props => {
  return (
    <div className="page">
      <div className="page__dashboard">
        <Header />
        <Menu />
        <div className="page__dashboard-wrapper">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
