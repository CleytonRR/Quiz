import React from 'react'
import { Button, Form, Jumbotron } from 'react-bootstrap'

import './styles.css'

function Ask() {
    return (
        <Jumbotron fluid className='question'>
            <Form>
                <h3 className='text-center'>Quem descobriu o teorema de pitagoras</h3>
                <Button variant="outline-primary" block>Platão</Button>
                <Button variant="outline-primary" block>Aristoteles</Button>
                <Button variant="outline-primary" block>Tales</Button>
                <Button variant="outline-primary" block>Pitagoras</Button>
            </Form>
        </Jumbotron>
    )
}

export default Ask