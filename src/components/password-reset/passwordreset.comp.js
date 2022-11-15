import React from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, 
    fromSwitcher, username}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>
                Reset Password
            </h1>
            <hr />
            <Form autoComplete='off' 
            onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleOnChange}
                    placeholder='Enter Username'
                    required
                    />
                </Form.Group>
                <br/>
                <Button type='submit'>Reset Password</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!' onClick={() => fromSwitcher('login')}>Login</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    fromSwitcher: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
}
