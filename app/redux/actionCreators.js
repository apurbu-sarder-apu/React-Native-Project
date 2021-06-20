import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://myapp-e24de-default-rtdb.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}


export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}

export const getComments = () => dispatch => {
    axios.get("https://myapp-e24de-default-rtdb.firebaseio.com/comments.json")
        .then(response => dispatch(LoadComments(response.data)))
        .catch(err => console.log(err))
}