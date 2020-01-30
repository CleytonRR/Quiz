import React from 'react'
import UserView from '../../components/Users/index'
import { Container, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'

class RankingPage extends React.Component {

    render() {
        const { correctAnswer } = this.props
        return (
            <Container className='container-fluid'>
                <Jumbotron>
                    <h1>{`Acertou ${correctAnswer}`}</h1>
                    <UserView />
                </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = store => ({
    correctAnswer: store.correct.correctAsnwer
});

export default connect(mapStateToProps)(RankingPage)