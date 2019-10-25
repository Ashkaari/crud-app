import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// LAYOUTS
import LoginLayout from './layouts/LoginLayout';
import DashboardLayout from './layouts/DashboardLayout';

// PAGES
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import NewPatient from './pages/NewPatient';

// ROUTES
import MainRoute from './routes/MainRoute';
import PrivateRoute from './routes/PrivateRoute';

import 'styles/index.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <MainRoute path="/login" component={LoginPage} layout={LoginLayout} />
          <MainRoute path="/register" component={RegisterPage} layout={LoginLayout} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} layout={DashboardLayout} />
          <PrivateRoute path="/patients/new" component={NewPatient} layout={DashboardLayout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
