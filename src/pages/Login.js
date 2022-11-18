import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import Logo from '../assets/images/logo.png';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
    return (
        <div className='body-container'>
            <Container data-aos="zoom-in">
                <Row className='main-area'>
                    <Col xs='12' lg='5'>
                        <div className='logo-section'>
                            <Image fluid src={Logo} width={500} alt="Logo" loading='lazy' />
                        </div>
                    </Col>
                    <Col xs='12' lg='5'>
                        <div className='form-area'>
                            <h4 className='text-center fs-5 fw-bold mb-4'>LOGIN</h4>
                            <LoginForm />
                            <p className='account-text'>Don't have an acount? <span className='switch-form'>Register</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
