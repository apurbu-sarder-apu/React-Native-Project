import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
     comments: []
}

export const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        default:
            return state;
    }
}
