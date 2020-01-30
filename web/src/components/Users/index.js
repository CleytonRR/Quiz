import React from 'react';
import api from '..//../services/api'

import './styles.css'

class UserView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    async loadUser() {
        const response = await api.get('user')
        response.data.sort(function (a, b) {
            return (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0)
        })
        this.setState({
            users: response.data
        })
        alert('So chamei agora')
    }

    componentDidMount() {
        this.loadUser()
    }

    render() {
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
                        {this.state.users.map((user, index) => (
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

}

export default UserView