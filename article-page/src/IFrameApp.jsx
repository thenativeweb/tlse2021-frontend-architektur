import { Article } from './Article';
import React from 'React';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const IFrameApp = () => (
    <Router>
      <Switch>
        <Route exact path='/'>
          Should never get here
        </Route>
        <Route path='/:id'>
          <Article />
        </Route>
      </Switch>
    </Router>
);

export {
  IFrameApp
};
