import React from 'react'
import api from '../../services/api'
import { Redirect } from 'react-router-dom'


class FormCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rendering: false,
            input: ''
        }
    }

    handleInput = (e) => {
        this.setState({input: e.target.value})
    }

    att = async (e) => {
        e.preventDefault()
        alert(this.state.input)
        try {
            const response = await api.get(`/user/${this.state.input}`)
            if (response.status === 200) {
                this.setState({
                    rendering: !this.state.rendering
                })
            }
        } catch (error) {
            console.error('Erro ao buscar', +error)
        }
    }

    renderPage = () => {
        if (this.state.rendering) {
            return <Redirect to="/questions" />
        }
    }
    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Nome</label>
                    
                    <input type="text" 
                    className='form-control' 
                    id='name' aria-describedby="nameUser" 
                    onChange={this.handleInput} 
                    value={this.state.input}/>

                    <small id='nameUser' className='form-text text-muted'>Insira seu nome para iniciar o desafio</small>
                </div>
                <button type="submit" onClick={this.att} class="btn btn-primary">Começar</button>
                <div>{this.renderPage()}</div>
            </form>
        )

    }
}


export default FormCreation