import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// LAYOUTS
import LoginLayout from './layouts/LoginLayout';

// PAGES
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFound from './pages/NotFound';

// ROUTES
import MainRoute from './routes/MainRoute';

import './styles/index.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <MainRoute path="/login" component={LoginPage} layout={LoginLayout} />
          <MainRoute path="/register" component={RegisterPage} layout={LoginLayout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
