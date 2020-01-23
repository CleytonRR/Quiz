import React from 'react'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'

function Ask() {
    function asnwerClick(e) {
        e.preventDefault()
        console.log(e.target.innerText)
    }

    return (
        <Jumbotron fluid className='question'>
            <Form>
                <h3 className='text-center'>Quem descobriu o teorema de pitagoras</h3>
                <Button variant="outline-primary" block onClick={asnwerClick}>Platão</Button>
                <Button variant="outline-primary" block onClick={asnwerClick}>Aristoteles</Button>
                <Button variant="outline-primary" block onClick={asnwerClick}>Tales</Button>
                <Button variant="outline-primary" block onClick={asnwerClick}>Pitagoras</Button>
            </Form>
        </Jumbotron>
    )
}

export default Ask