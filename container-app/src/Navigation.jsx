import React from 'React';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  const history = useHistory();

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => {
        history.push('/');
      } }>
        articler
      </Navbar.Brand>
        <Nav className='mr-auto'>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-dark'>Search</Button>
        </Form>
        </Nav>
    </Navbar>
  );
};

export {
  Navigation
};
