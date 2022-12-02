import * as actionTypes from './actionTypes';
import Toast from '../../../shared/Toast';
import Axios from '../../../axios/Axios';

export const userLogin = (data, navigation) => dispatch => {
    Axios.post('user/login', data)
        .then(response => {
            dispatch({
                type: actionTypes.USER_LOGIN,
                payload: response.data.user
            });
            navigation('/dashboard');
            Toast.success(response.data.message);
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const userRegistration = (data, navigate) => dispatch => {
    Axios.post('user/register', data)
        .then(response => {
            navigate('/login');
            Toast.success(response.data.message);
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const getAllPlayers = () => dispatch => {
    Axios.get('user/all-players')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_PLAYERS,
                payload: response.data.players
            });
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};