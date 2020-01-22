import React from 'react';
import api from '..//../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

function UserView() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('user')
            setUsers(response.data)
        }

        loadUser()
    }, []) 
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <p>nome: {user.name}</p>
                </li>
            ))}
        </ul>
    )
  }

export default UserView