import React from 'react';
import UserView from './components/Users/index'
import { Jumbotron, Container } from 'react-bootstrap' 

import './static/css/global.css'

function App() {

  return (
    <Container className='container-fluid'>
      <Jumbotron>
      <h1 className='text-center'>Quiz matemático</h1>
      <UserView />
      </Jumbotron>
    </Container>
  );
}

export default App;
