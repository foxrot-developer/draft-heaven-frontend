import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
