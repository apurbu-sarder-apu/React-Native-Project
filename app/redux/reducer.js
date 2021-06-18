import { combineReducers } from 'redux';
// import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';



const photoReducer = (photoState = {isLoading: false, photos: [], errMess: null}, action) => {
    switch (action.type) {
        case actionTypes.PHOTOS_LOADING:
            return {
                ...photoState,
                isLoading: true,
                errMess: null,
                photos: []
            }

            case actionTypes.LOAD_PHOTOS:
                return {
                    ...photoState,
                    isLoading: false,
                    errMess: null,
                    photos: action.payload
                }
                case actionTypes.PHOTOS_FAILED:
                    return {
                        ...photoState,
                        isLoading: false,
                        errMess: action.payload,
                        photos: []
                    }
        default:
            return photoState;
    }

}

const commentReducer = (commentState = {isLoading: true , comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return{
                ...commentState,
                isLoading: false,
                comments: action.payload
            };

            case actionTypes.COMMENTS_LOADING:
                return {
                    ...commentState,
                    isLoading: true,
                    comments: []
                };


        case actionTypes.ADD_COMMENT:
            let comment = action.payload;

            //console.log(comment);
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            };
        
        default:
            return commentState;
    }

}

export const Reducer = combineReducers({
    photos: photoReducer,
    comments: commentReducer,
});