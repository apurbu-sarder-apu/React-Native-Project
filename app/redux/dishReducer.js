import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
     dishes: []
}

export const dishesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {
                ...state,
                dishes: action.payload,
            }
        default:
            return state;
    }
}
