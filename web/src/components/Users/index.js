import React from 'react';
import api from '..//../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

import './styles.css'

function UserView() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('user')
            response.data.sort(function (a, b) {
                return (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0)
            })
            setUsers(response.data)
        }

        loadUser()
    }, [])
    return (
        <>
            <h1 className='text-center ranking'>Ranking</h1>
            <table className='table table-stripped table-dark'>
                <thead>
                    <th scope="col">Posição</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Acertos</th>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserView