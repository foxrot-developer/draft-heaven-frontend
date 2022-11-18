import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

import '../../assets/css/stats.css';

const Stats = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col xs='12' lg='6' data-aos="fade-right">
                    <h2 className='section-title'>Its All In The Stats</h2>
                    <p className='text-justify'>Welcome to the Draft Haven. Signup and help yourself to the latest MLB statistics. We hope that utilizing our quality search facilities will make your analysis easy and your player selection even easier. Also when you have identified your favorities, let us generate your teams.</p>
                    <p>After all it's all in the stats</p>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Yearly statistics - Sabermetrics, Barrels, Hard Hit, Splits, Batted Ball</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>History and Daily Box Scores</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Leader Boards</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Streaks including last 5 games, last 10 games</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Batters against pitchers</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Team rankings</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Today's games and the odds</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Today's starters</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Weather</p>
                    </div>
                    <div className='single-stats'>
                        <FaCheck className='check-icon' />
                        <p className='m-0 p-0'>Injuries</p>
                    </div>
                </Col>
                <Col xs='12' lg='6' className='stats-side' data-aos="fade-left">
                    <Row>
                        <Col><h2 className='stat'>Yearly Stats</h2></Col>
                        <Col><h2 className='stat'>Batted Ball</h2></Col>
                    </Row>
                    <Row>
                        <Col><h2 className='stat'>Splits</h2></Col>
                        <Col><h2 className='stat'>Barrels / Hard Hit</h2></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Stats;
