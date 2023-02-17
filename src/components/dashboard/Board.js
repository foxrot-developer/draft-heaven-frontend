import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';

import '../../assets/css/board.css';
import { getAllPlayers, playerYearlyBattingStats, clearStats } from '../../store/StoreIndex';

const Board = () => {

    const dispatch = useDispatch();

    const allPlayers = useSelector(state => state.user.allPlayers);
    const battingStats = useSelector(state => state.user.battingStats);

    const [choosedPlayers, setChoosedPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState('');

    const playerOptions = allPlayers?.map(player => {
        return { value: player.PlayerRefID, label: `${player.FirstName} ${player.LastName} - ${player.Position1}` };
    });

    const resetHandler = () => {
        setChoosedPlayers([]);
        setSelectedPlayers({});
        dispatch(clearStats());
    };

    const updateSelectedPlayerHandler = (players, player) => {
        setChoosedPlayers(players);
        setSelectedPlayers(player.value);
        dispatch(playerYearlyBattingStats(player.value));
    };

    const singlePlayerHandler = (player) => {
        setSelectedPlayers(player);
        dispatch(playerYearlyBattingStats(player));
    };

    useEffect(() => {
        dispatch(getAllPlayers());
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <div className='board-top'>
                        <p className='top-name'>ALL</p>
                        <p className='top-name'>1B</p>
                        <p className='top-name'>2B</p>
                        <p className='top-name'>3B</p>
                        <p className='top-name'>SS</p>
                        <p className='top-name'>OF</p>
                        <p className='top-name'>C</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex'>
                    <label className='me-2'>Select Players</label>
                    <Multiselect
                        options={playerOptions}
                        displayValue="label"
                        showCheckbox
                        showArrow
                        isObject={true}
                        onSelect={(selectedList, selectedItem) => updateSelectedPlayerHandler(selectedList, selectedItem)}
                        onRemove={(selectedList, removedItem) => setChoosedPlayers(selectedList)}
                        avoidHighlightFirstOption
                        selectedValues={choosedPlayers}
                        hideSelectedList
                    />
                    <p className='ms-2 mt-2 fw-bold'>{choosedPlayers.length}</p>
                </Col>
                <Col className='d-flex'>
                    <label>Your Players</label>
                    <Form.Select value={selectedPlayers} className='mb-3 ms-3' onChange={e => singlePlayerHandler(e.target.value)}>
                        {choosedPlayers.length > 0 && choosedPlayers.map((player, index) => {
                            return <option key={index} value={player.value}>{player.label}</option>
                        })}
                    </Form.Select>
                </Col>
                <Col className='d-flex'>
                    <Button variant='primary' onClick={resetHandler}>Reset</Button>
                </Col>
            </Row>
            <div className='board-main-area'>
                <Row>
                    <Col>
                        <div className='stat-options'>
                            <p className='stat-option'>BATTING STATISTICS</p>
                            <p className='stat-option'>TEAM RANKINGS</p>
                            <p className='stat-option'>OTHER DRIVERS</p>
                            <p className='stat-option'>PLAYER RANKING</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3 mb-5 pb-5'>
                    <Col xs='12' lg='6' className='text-center'>
                        <Form.Select className='mt-3 ms-3' style={{ width: '50%' }}>
                            <option value="1">Yearly Stats</option>
                            <option value="2">Batted Ball</option>
                            <option value="3">Splits</option>
                            <option value="3">Barrels</option>
                        </Form.Select>
                        {battingStats.length > 0 && <div className='simple-stats'>
                            {battingStats.map((stat, index) => {
                                return <div key={index} className='d-flex align-items-center justify-content-around'>
                                    <p>{stat.key}</p>
                                    <p>{stat.value}</p>
                                </div>
                            })}
                        </div>}
                    </Col>
                    <Col xs='12' lg='6'>
                        <div className='highlights'>
                            <Row className='p-4'>
                                <Col>
                                    <p>PLAYER HIGHLIGHTS</p>
                                </Col>
                                <Col>
                                    <p>PROJECTED FPTS</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Board;
