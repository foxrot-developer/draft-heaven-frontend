import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    user: {},
    allPlayers: [],
    battingStats: []
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isLogin: true,
                user: action.payload
            };
        case actionTypes.USER_LOGOUT:
            return {
                isLogin: false,
                user: {},
                allPlayers: [],
                battingStats: []
            };
        case actionTypes.ALL_PLAYERS:
            return {
                ...state,
                allPlayers: action.payload
            };
        case actionTypes.BATTING_STATS:
            return {
                ...state,
                battingStats: action.payload
            };
        case actionTypes.CLEAR_STATS:
            return {
                ...state,
                battingStats: []
            };
        default:
            return state;
    }
}

export default UserReducer;
