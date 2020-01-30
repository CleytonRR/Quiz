import React from 'react'
import UserView from '../../components/Users/index'
import { Container, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'

class RankingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            correct: this.props.correctAnswer,
            name: this.props.newValue
        }
    }   
    render() {
        return (
            <Container className='container-fluid'>
                <Jumbotron>
                    <h1>{`Nome: ${this.state.name} Acertou ${this.state.correct}`}</h1>
                    <UserView />
                </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = store => ({
    correctAnswer: store.correct.correctAsnwer,
    newValue: store.name.newValue
});

export default connect(mapStateToProps)(RankingPage)