import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import '../assets/css/custom-navbar.css';

const CustomNavbar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar-main'>
            <Container>
                <Row>
                    <Col>
                        <Image fluid src={Logo} width={200} alt="Logo" loading='lazy' />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        <Button className='px-5 btn custom-btn me-3' onClick={() => navigate('/login')}>
                            Login
                        </Button>
                        <Button className='px-5 btn custom-btn' onClick={() => navigate('/login')}>
                            Register
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomNavbar;
