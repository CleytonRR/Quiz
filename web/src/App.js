import React from 'react';
import UserView from './components/Users/index'
import { Jumbotron } from 'react-bootstrap' 

import './static/css/global.css'

function App() {

  return (
    <div id='app'>
      <Jumbotron>
      <h1>Quiz matemático</h1>
      <UserView />
      </Jumbotron>
    </div>
  );
}

export default App;
