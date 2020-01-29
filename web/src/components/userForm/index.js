import React from 'react'
import api from '../../services/api'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickButton } from '../../actions'
import { bindActionCreators } from 'redux'

import './styles.css'
import { Jumbotron } from 'react-bootstrap'

class FormCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rendering: false,
            input: '',
            warning: false,
        }
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value })
    }

    att = async (e) => {
        const { clickButton } = this.props
        e.preventDefault()
        try {
            const response = await api.get(`/user/${this.state.input}`)
            if (response.status === 200) {
                this.setState({
                    rendering: !this.state.rendering
                })
                clickButton(this.state.input)
            }
        } catch (error) {
            this.setState({
                warning: !this.state.warning
            })
            console.error('Erro ao buscar', +error)
        }
    }

    renderWarning = () => {
        if (this.state.warning) {
            return <span id='warning' className='redText'>Nome de usuario ja utilizado, escolha outro</span>
        }
    }

    renderPage = () => {
        if (this.state.rendering) {
            return <Redirect
                to={{
                    pathname: "/questions",
                    state: { name: "cleyton" }
                }}
            />

        }
    }
    render() {

        const { newValue } = this.props
        return (
            <Jumbotron className='formParticipate'>
                <h3>Participe</h3>
                <form>
                    <div className='form-group'>
                        <label htmlFor="name">Nome</label>

                        <input type="text"
                            className='form-control'
                            id='name' aria-describedby="nameUser"
                            onChange={this.handleInput}
                            value={this.state.input} />
                        <small id='nameUser' className='form-text text-muted'>Insira seu nome para iniciar o desafio</small>
                        <div>{this.renderWarning()}</div>
                    </div>
                    <button type="submit" onClick={this.att} class="btn btn-primary">Começar</button>
                    <div>{this.renderPage()}</div>
                </form>
            </Jumbotron>
        )

    }
}

const mapStateToProps = store => ({
    newValue: store.name.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(FormCreation)