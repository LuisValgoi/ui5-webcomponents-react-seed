import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BrowserProvider from '../util/URL/Browser/BrowserProvider';

import TodoList from '../pages/Todo/List/TodoList';
import NotFound from '../pages/Fallback/NotFound';
import Buggy from '../pages/Fallback/Buggy';
import RouteValidator from '../auth/Routes/Validator';

const Routes = () => {
  return (
    <Switch>
      <Redirect path={BrowserProvider.getUrl('HOME')} exact to={BrowserProvider.getUrl('TODO_LIST')} />
      <RouteValidator allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions" path={BrowserProvider.getUrl('TODO_LIST')} component={TodoList} />
      <Route path={BrowserProvider.getUrl('BUGGY')} exact component={Buggy} />
      <Route path={BrowserProvider.getUrl('NOT_FOUND')} exact component={NotFound} />
      <Route path={BrowserProvider.getUrl('ANY')} component={NotFound} />
    </Switch>
  );
};

export default Routes;
