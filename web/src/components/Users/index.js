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
                        <th scope='row'>{user.id}</th>
                        <td>{user.name}</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </table>
        // <ul>
        //     {users.map(user => (
        //         <li key={user.id}>
        //             <p>nome: {user.name}</p>
        //         </li>
        //     ))}
        // </ul>
    )
  }

export default UserView