import { Footer } from '../Footer';
import { IFrameMicroFrontend } from './IFrameMicroFrontend';
import { Navigation } from '../Navigation';
import React from 'React';
import { Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const IFrameContainerApp = () => (
    <Router>
      <Container>
        <Row>
          <Navigation />
        </Row>
        <Row className='h-100'>
          <Switch>
            <Route exact path='/'>
              <IFrameMicroFrontend src='http://localhost:8081' />
            </Route>
            <Route path='/article/:id'>
              <IFrameMicroFrontend src='http://localhost:8082' />
            </Route>
          </Switch>
        </Row>
        <Footer />
      </Container>
    </Router>
);

export {
  IFrameContainerApp
};
