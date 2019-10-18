import React from 'react';
import '../styles/page.scss';
import '../styles/page-dashboard.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';

const DashboardLayout = props => {
  return (
    <div className="page">
      <div className="page__dashboard">
        <Header />
        <Menu />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
