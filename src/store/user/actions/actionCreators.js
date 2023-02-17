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

/**
 * It dispatches an action to the reducer, which sets the user state to null, and then navigates to the
 * home page
 * @param navigate - This is the navigation function that we get from the withNavigation HOC.
 */
export const userLogout = (navigate) => dispatch => {
    dispatch({
        type: actionTypes.USER_LOGOUT
    });
    navigate('/');
};

/**
 * It dispatches an action to the reducer with the type `ALL_PLAYERS` and the payload of the response
 * data from the API
 */
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

/**
 * It takes a playerRef as an argument, makes a GET request to the backend, and dispatches the response
 * to the reducer
 */
export const playerYearlyBattingStats = playerRef => dispatch => {
    Axios.get(`user/player-yearly-stats-batting/${playerRef}`)
        .then(response => {
            let finalizedPlayerRecords = [];
            for (const [key, value] of Object.entries(response.data.playerRecords)) {
                let obj = {};
                obj.key = key;
                obj.value = value;
                finalizedPlayerRecords.push(obj);
            }
            const sortedPlayerRecords = finalizedPlayerRecords.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
            dispatch({
                type: actionTypes.BATTING_STATS,
                payload: sortedPlayerRecords
            });
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const clearStats = () => dispatch => {
    dispatch({
        type: actionTypes.CLEAR_STATS
    });
};