import React from 'react'
import UserView from '../Users/index'
import FormCreation from '../userForm/index'
import Fade from 'react-reveal/Fade'
import { Row, Col } from 'react-bootstrap'

function InitialComponent() {
    return (
        <Row>
            <Col md={5}>
                <Fade left big>
                    <FormCreation />
                </Fade>
            </Col>
            <Col md={7}>
                <Fade right big>
                    <UserView />
                </Fade>
            </Col>
        </Row>
    )
}

export default InitialComponent