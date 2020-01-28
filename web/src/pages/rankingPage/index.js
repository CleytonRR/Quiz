import React from 'react'
import UserView from '../../components/Users/index'
import { Container, Jumbotron } from 'react-bootstrap'

class RankingPage extends React.Component {

    render() {
        return (
            <Container className='container-fluid'>
                <Jumbotron>
                    <UserView />
                </Jumbotron>
            </Container>
        )
    }
}

export default RankingPage