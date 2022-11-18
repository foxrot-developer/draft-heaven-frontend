import React from 'react';

import CustomNavbar from '../shared/CustomNavbar';
import TopBar from '../components/dashboard/TopBar';
import Board from '../components/dashboard/Board';

const Dashboard = () => {
    return (
        <React.Fragment>
            <CustomNavbar />
            <TopBar />
            <Board />
        </React.Fragment>
    )
}

export default Dashboard;
