import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewNaver from './pages/NewNaver';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/new-naver" component={NewNaver} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
