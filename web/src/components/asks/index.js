import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'

function Ask() {
    const [asks, setAsks] = useState([])

    useEffect(() => {
        async function getAsks() {
            const response = await api.get('ask')
            setAsks(response.data)
        }

        getAsks()
    }, [])
    function asnwerClick(e) {
        e.preventDefault()
        console.log(e.target.innerText)
    }

    return (
        <Jumbotron fluid className='question'>
            <Form>
                {asks.map(ask => (
                    <>
                        <h3 className='text-center' key={ask.id}>Quem descobriu o teorema de pitagoras</h3>
                        {ask.choices.split(',').map((choice,index) => (
                            <Button key={index} variant="outline-primary" block onClick={asnwerClick}>{choice}</Button>
                        ))}
                    </>
                ))}
            </Form>
        </Jumbotron>
    )
}

export default Ask