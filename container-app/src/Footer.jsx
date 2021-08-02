import React from 'React';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
      <Nav className='mr-auto'>
        <Nav.Link>articler footer</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>Impressum</Nav.Link>
        <Nav.Link>Datenschutz</Nav.Link>
      </Nav>
  </Navbar>
);

export {
  Footer
};
