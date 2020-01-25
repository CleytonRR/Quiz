import React from 'react'
import { Redirect } from 'react-router-dom'


class FormCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rendering: false
        }
    }


    att = (e) => {
        e.preventDefault()
        this.setState({
            rendering: !this.state.rendering
        })

        console.log(this.state.rendering)
    }

    renderPage = () => {
        if(this.state.rendering){
            return <Redirect to="/questions" />
        }
    }
    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Nome</label>
                    <input type="text" className='form-control' id='name' aria-describedby="nameUser" />
                    <small id='nameUser' className='form-text text-muted'>Insira seu nome para iniciar o desafio</small>
                </div>
                <button type="submit" onClick={this.att} class="btn btn-primary">Começar</button>
                <div>{this.renderPage()}</div>
            </form>
        )

    }
}


export default FormCreation