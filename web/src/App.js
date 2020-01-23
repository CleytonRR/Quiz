import React from 'react';
import UserView from './components/Users/index'
import FormCreation from './components/userForm/index'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap' 

import './static/css/global.css'

function App() {

  return (
    <Container className='container-fluid'>
      <Jumbotron>
      <h1 className='text-center'>Quiz matemático</h1>
      <Row>
        <Col md={5}>
          <FormCreation />
        </Col>
        <Col md={7}>
          <UserView />
        </Col>
      </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
