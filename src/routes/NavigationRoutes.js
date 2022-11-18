import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Registration = React.lazy(() => import('../pages/Registration'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
