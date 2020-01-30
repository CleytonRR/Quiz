import React from 'react'
import api from '../../services/api'
import { Fade, Bounce } from 'react-reveal'
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'
import { clickUpdate } from '../../actions'
import { bindActionCreators } from 'redux'

import './styles.css'
import { Redirect } from 'react-router-dom'


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

    async isCreate(correctAsk) {
        const {newValue } = this.props
        await api.post('/user', {
            name: newValue,
            count: correctAsk
        })
        alert("Terminei a criação")
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

        const { clickUpdate } = this.props
        if (this.atualQuestionPossible() === 2) {
            clickUpdate(this.state.correctAnswer)
            this.isCreate(this.state.correctAnswer)
            alert('Criei')
            return (
                <Bounce>
                    <Redirect to="/ranking" />
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

const mapStateToProps = store => ({
    correctAnswer: store.correct.correctAsnwer,
    newValue: store.name.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickUpdate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ask)