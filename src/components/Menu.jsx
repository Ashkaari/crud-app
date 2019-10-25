import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../styles/images/dashboard.svg';

const Menu = () => {
  return (
    <div className="page__dashboard-menu">
      <div className="page__dashboard-menu__item main">
        <Logo />
        Dashboard
      </div>
      <div className="page__dashboard-menu__item category">Appointments</div>
      <NavLink to="/schedule" className="page__dashboard-menu__item link">
        My Schedule
      </NavLink>
      <NavLink to="/patients/new" className="page__dashboard-menu__item link">
        Add new patient
      </NavLink>
      <NavLink to="/patients" className="page__dashboard-menu__item link">
        Patients List
      </NavLink>

      <div className="page__dashboard-menu__item category">Other</div>
      <NavLink to="/search" className="page__dashboard-menu__item link">
        Search patient
      </NavLink>
      <NavLink to="/services" className="page__dashboard-menu__item link">
        Services
      </NavLink>
      <NavLink to="/me" className="page__dashboard-menu__item link">
        Settings
      </NavLink>
    </div>
  );
};

export default Menu;
