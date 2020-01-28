import React from 'react'
import api from '../../services/api'
import { Fade, Bounce } from 'react-reveal'
import { Button, Form, Jumbotron, Card } from 'react-bootstrap'

import './styles.css'


class Ask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asks: [],
            atualQuestion: 0,
            correctAnswer: 0,
            finished: false
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
            alert('Correto')
            this.setState({
                correctAnswer: this.state.correctAnswer + 1
            })
        } else {
            alert("Errou")
        }

        this.setState({
            atualQuestion: this.state.atualQuestion + 1
        })
    }

    shouldComponentUpdate() {
        if (this.state.atualQuestion === 1) {
            this.setState({
                finished: !this.setState.finished
            })
        }
        return true
    }

    atualQuestionPossible() {
        return this.state.atualQuestion
    }

    render() {
        if (this.atualQuestionPossible() === 2) {
            return (
                <Bounce>
                    <Card>
                        <Card.Body
                            className="text-center text-primary finished-text">
                            Obrigado por participar! ! você acertou: {this.state.correctAnswer} perguntas
                        </Card.Body>
                    </Card>
                </Bounce>
            )
        }
        if (this.state.asks === null || this.state.asks.length === 0) {
            return (
                <Bounce>
                    <h1 className='text-center'>Carregando...</h1>
                </Bounce>
            )
        }
        else {
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