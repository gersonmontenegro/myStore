import { combineReducers } from 'redux';
import { GET_DATA, SET_DATA } from '../actions/types';

const initialState = {
    data: 0,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return state;
        }
        case SET_DATA: {
            return { ...state, data: action.payload.data };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    dataReducer,
});
