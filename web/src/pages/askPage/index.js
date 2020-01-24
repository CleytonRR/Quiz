import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Ask from '../../components/asks/index'

function AskPage() {
    return (
        <Container className='container-fluid'>
            <Jumbotron>
                <h1 className='text-center'>Quiz matemático</h1>
                <Ask />
            </Jumbotron>
        </Container>
    )
}

export default AskPage