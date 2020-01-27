import React from 'react'
import api from '../../services/api'
import Fade from 'react-reveal/Fade'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'


class Ask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asks: [],
            atualQuestion: 0,
            correctAnswer: 0
        }
        this.clickAnswer = this.clickAnswer.bind(this)
    }

    async loadApi() {
        const response = await api.get('ask')
        this.setState({
            asks: response.data
        })
    }
    componentDidMount() {
        this.loadApi()
    }

    clickAnswer(e) {
        if (e.target.innerText === this.state.asks[this.state.atualQuestion].answer) {
            console.log('resposta certa')
        } else {
            console.log('errou')
        }

        this.setState({
            atualQuestion: this.state.atualQuestion + 1
        })
    }

    shouldComponentUpdate() {
        alert('Estou aqui antes de chamar a atualização')
        return true
    }

    render() {
        if (this.state.asks === null || this.state.asks.length === 0) {
            return <h1>Estou aqui</h1>
        } else {
            return (
                <Fade left big >
                    <Jumbotron fluid className='question'>
                        <Form>
                            <h3 className='text-center'>{this.state.asks[this.state.atualQuestion].ask}</h3>
                            {this.state.asks[this.state.atualQuestion].choices.split(',').map((choice, index) => (
                                <Button
                                    key={index}
                                    variant="primary"
                                    onClick={this.clickAnswer}
                                    block
                                >{choice}
                                </Button>
                            ))}
                        </Form>
                    </Jumbotron>
                </Fade>
            )

        }
    }
}

export default Ask