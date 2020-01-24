import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import InitialComponent from '../../components/InitialComponent'

function InitalPage() {
    return (
        <Container className='container-fluid'>
            <Jumbotron>
                <h1 className='text-center'>Quiz matemático</h1>
                <InitialComponent />
            </Jumbotron>
        </Container>
    )
}

export default InitalPage