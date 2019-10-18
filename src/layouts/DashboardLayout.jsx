import React from 'react';

import '../styles/page.scss';

const DashboardLayout = props => (
  <div className="page">
    <div className="page__dashboard">
      <div className="page__dashboard-header">header</div>
      {props.children}
    </div>
  </div>
);

export default DashboardLayout;
