import { Article } from './Article';
import React from 'React';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const ScriptApp = props => (
    <Router history={history} basename='/article'>
      <Switch>
        <Route exact path='/'>
          Loading...
        </Route>
        <Route path='/:id'>
          <Article />
        </Route>
      </Switch>
    </Router>
);

export {
  ScriptApp
};
