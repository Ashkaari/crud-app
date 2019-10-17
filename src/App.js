import React from 'react';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFound from './pages/NotFound';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './styles/index.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
