import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap' 
import InitialPage from './components/InitialPage/index'
import Ask from './components/asks/index'

import './static/css/global.css'

function App() {

  return (
    <Container className='container-fluid'>
      <Jumbotron>
        <h1 className='text-center'>Quiz matemático</h1>
          <InitialPage />
          <Ask />
      </Jumbotron>
    </Container>
  );
}

export default App;
