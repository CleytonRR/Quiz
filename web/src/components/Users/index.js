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
        <table className='table table-stripped table-dark'>
            <thead>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">Acertos</th>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td scope='row'>{user.id}</td>
                        <td>{user.name}</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
  }

export default UserView