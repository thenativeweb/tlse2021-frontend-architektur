import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import React from 'React';
import { ScriptMicroFrontend } from './ScriptMicroFrontend';
import { Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const ScriptContainerApp = () => (
    <Router>
      <Container>
        <Row>
          <Navigation />
        </Row>
        <Row className='h-100'>
          <Switch>
            <Route exact path='/'>
              <ScriptMicroFrontend name='ArticleOverview' src='http://localhost:8081/index.js' />
            </Route>
            <Route path='/article/:id'>
              <ScriptMicroFrontend name='ArticlePage' src='http://localhost:8082/index.js' />
            </Route>
          </Switch>
        </Row>
        <Footer />
      </Container>
    </Router>
);

export {
  ScriptContainerApp
};
