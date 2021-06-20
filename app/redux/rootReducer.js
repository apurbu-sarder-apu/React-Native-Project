import {combineReducers} from 'redux';
import { dishesReducer } from './dishReducer';
import { commentReducer } from './commentReducer';

const rootReducer = combineReducers({
    dishes: dishesReducer,
    comments: commentReducer,
});

export default rootReducer;