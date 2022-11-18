import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../../assets/css/top-bar.css';

const TopBar = () => {
    return (
        <div className='top-bg'>
            <Container>
                <Row>
                    <Col>
                        <div className='top-main'>
                            <p className='item-name'>MLB</p>
                            <p className='item-name'>NFL</p>
                            <p className='item-name'>NBA</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopBar;
