import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Registration = React.lazy(() => import('../pages/Registration'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const NavigationRoutes = () => {

    const isLogin = useSelector(state => state.user.isLogin);

    const routes = isLogin ? (
        <Routes>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>

            <Route
                path="*"
                element={<Navigate to="/dashboard" />}
            />
        </Routes>
    ) : (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )

    return routes;
}

export default NavigationRoutes;
