import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';
import EditNaver from '../pages/EditNaver';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/new-naver" component={NewNaver} isPrivate />
        <Route path="/edit-naver/:naver" component={EditNaver} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
