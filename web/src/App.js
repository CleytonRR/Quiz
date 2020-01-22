import React from 'react';
// import UserView from './components/Users/index'
import api from './services/api'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('user')

      setUsers(response.data)
    }
    loadUsers()
    
  }, [])
  return (
  <ul>
    {users.map(user => (
    <li key={user.id}>
      <p>nome: {user.name}</p>
    </li>
    ))}
  </ul>
  );
}

export default App;
