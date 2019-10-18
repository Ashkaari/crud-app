import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/page.scss';
import '../styles/page-dashboard.scss';

const DashboardLayout = props => {
  const user = useSelector(state => state.user);

  return (
    <div className="page">
      <div className="page__dashboard">
        <div className="page__dashboard-header">
          <span className="page__dashboard-header__logo _header">LEONURUS LTD.</span>
          <span className="page__dashboard-header__appointments _subheader">
            Hi, {user.name}. You have <strong>3 appointments today</strong>
          </span>
          <div className="page__dashboard-header__user-frame">
            <div className="page__dashboard-header__user-frame__image">
              <img src={require('../styles/images/drbrown.png')} alt="" />
            </div>
            <div className="page__dashboard-header__user-frame__name _subheader">{user.name}</div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
