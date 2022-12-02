import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    user: {},
    allPlayers: []
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isLogin: true,
                user: action.payload
            };
        case actionTypes.ALL_PLAYERS:
            return {
                ...state,
                allPlayers: action.payload
            };
        default:
            return state;
    }
}

export default UserReducer;
