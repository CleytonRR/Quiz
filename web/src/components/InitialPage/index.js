import React from 'react'
import UserView from '../Users/index'
import FormCreation from '../userForm/index'
import {Row, Col} from 'react-bootstrap'

function InitialPage() {
    return (
        <Row>
            <Col md={5}>
                <FormCreation />
            </Col>
            <Col md={7}>
                <UserView />
            </Col>
        </Row>
    )
}

export default InitialPage