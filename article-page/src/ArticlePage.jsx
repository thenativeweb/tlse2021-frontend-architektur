import { Article } from './Article';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const ArticlePage = props => {
  const basename = props.basename ?? '';

  return (
    <Router basename={basename}>
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
};

export {
  ArticlePage
};
