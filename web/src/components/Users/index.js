import React from 'react';
import api from '..//../services/api'
import { connect } from 'react-redux'

import './styles.css'

class UserView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            initialPag: true,
            failDb: false
        }
    }
    async isCreate() {
        const { newValue, correctAnswer } = this.props
        if (newValue === '') {
            return true
        }
        try {
            await api.post('/user', {
                name: newValue,
                count: correctAnswer
            })
            this.setState({
                initialPag: !this.state.initialPag
            })
        } catch (error) {
            console.error('Erro ao salvar')
            this.setState({
                failDb: !this.state.failDb
            })
        }
        this.loadUser()
    }

    async loadUser() {
        try {            
            const response = await api.get('user')
            response.data.sort(function (a, b) {
                return (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0)
            })
            this.setState({
                users: response.data
            })
        } catch (error) {
            console.error('Erro ao chamar')
            this.setState({
                failDb: !this.state.failDb
            })
        }
    }

    componentDidMount() {
        this.isCreate()
        this.loadUser()
    }

    tableUser(styleTable = '') {
        return (
            <>
                <h1 className='text-center ranking'>Ranking</h1>
                <table className={`table table-stripped ${styleTable}`}>
                    <thead>
                        <tr>
                            <th scope="col">Posição</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Acertos</th>
                        </tr>
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

    render() {
        if(this.state.failDb) {
            return (
                <p>Erro interno no servidor, tente novamente mais tarde</p>
            )
        }
        if (this.state.initialPag) {
            return (
                this.tableUser('table-dark')
            )
        }

        if (!this.state.initialPag) {
            return (
                this.tableUser('table-hover')
            )
        }
    }

}

const mapStateToProps = store => ({
    correctAnswer: store.correct.correctAsnwer,
    newValue: store.name.newValue
});

export default connect(mapStateToProps)(UserView)