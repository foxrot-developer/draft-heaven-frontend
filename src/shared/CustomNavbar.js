import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../assets/images/logo.png';
import '../assets/css/custom-navbar.css';
import { userLogout } from '../store/StoreIndex';

const CustomNavbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.user.isLogin);

    return (
        <div className='navbar-main'>
            <Container>
                <Row>
                    <Col>
                        <Image fluid src={Logo} width={200} alt="Logo" loading='lazy' />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        {!isLogin ? <React.Fragment>
                            <Button className='px-5 btn custom-btn me-3' onClick={() => navigate('/login')}>
                                Login
                            </Button>
                            <Button className='px-5 btn custom-btn' onClick={() => navigate('/login')}>
                                Register
                            </Button>
                        </React.Fragment> : <Button className='px-5 btn custom-btn' onClick={() => dispatch(userLogout(navigate))}>
                            Logout
                        </Button>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomNavbar;
