import React from 'react';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginForm = ({handleOnChange, handleOnSubmit,
    fromSwitcher, username, password}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>
                Staff Login
            </h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    placeholder='Enter Password'
                    required
                    />
                </Form.Group>
                <br/>
                <Button type='submit'>Login</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!' onClick={() => fromSwitcher('reset')}>Forget Password</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    fromSwitcher: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
