import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import Fade from 'react-reveal/Fade'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'

function Ask() {
    const [asks, setAsks] = useState([])
    const [rendering, setRendering] = useState(false)

    useEffect(() => {
        async function getAsks() {
            const response = await api.get('ask')
            setAsks(response.data)
        }
        getAsks()
    }, [rendering])
    function asnwerClick(e) {
        e.preventDefault()
        if (e.target.innerText === asks[e.target.value].answer) {
            e.target.className = 'btn btn-success btn-block'
            setRendering(!rendering)
        } else {
            e.target.className = 'btn btn-warning btn-block'
        }
    }

    return (
        <Fade left big >
            <Jumbotron fluid className='question'>
                <Form>
                    {asks.map((ask, indexAsk) => (
                        <>
                            <h3 className='text-center' key={ask.id}>Quem descobriu o teorema de pitagoras</h3>
                            {ask.choices.split(',').map((choice, index) => (
                                <Button
                                    value={indexAsk}
                                    key={index}
                                    variant="primary"
                                    block
                                    onClick={asnwerClick}>{choice}
                                </Button>
                            ))}
                        </>
                    ))}
                </Form>
            </Jumbotron>
        </Fade>
    )
}

export default Ask