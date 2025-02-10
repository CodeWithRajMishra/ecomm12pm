import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row>
          <p className="text-center">Copyright 2025 All Right Reserved</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
