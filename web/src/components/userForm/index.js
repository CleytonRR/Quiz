import React from 'react'


class FormCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rendering: false
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
                <button type="submit" class="btn btn-primary">Começar</button>
            </form>
        )

    }
}


export default FormCreation