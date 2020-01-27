import React from 'react'
import api from '../../services/api'
import Fade from 'react-reveal/Fade'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'


class Ask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asks: []
        }
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

    render() {
        if (this.state.asks === null || this.state.asks.length === 0) {
            return <h1>Estou aqui</h1>
        } else {
            return (
                <Fade left big >
                    <Jumbotron fluid className='question'>
                        <Form>
                            {this.state.asks.map((ask, index) => (
                                <>
                                    <h3 className='text-center' key={index}>{ask.ask}</h3>
                                    {ask.choices.split(',').map((choice, index) => (
                                        <Button
                                            value={ask.id}
                                            key={index}
                                            variant="primary"
                                            block>{choice}
                                        </Button>
                                    ))}
                                </>
                            ))}
                        </Form>
                    </Jumbotron>
                </Fade>
            )

        }
    }
}

export default Ask