import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl';
import axios from 'axios';

// ------------------------------COMMENTS LOADING------------------------------
// ------------------------------COMMENTS LOADING------------------------------
// ------------------------------COMMENTS LOADING------------------------------

export const commentLoading =() => ({
    type: actionTypes.COMMENTS_LOADING
})
export const LoadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseUrl + "comments")
        .then(response => response.data)
        .then(comments => dispatch(LoadComments(comments)))
}





//--------------------------------- ADD COMMENT--------------------------------
//--------------------------------- ADD COMMENT--------------------------------

export const addComment = (photoId, author, comment) => dispatch =>{
    const newComment = {
        photoId: photoId,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post(baseUrl + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))

}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})



        //------------------- LOAD PHOTOS FROM SERVER ----------------------
        //------------------- LOAD PHOTOS FROM SERVER ----------------------
        //------------------- LOAD PHOTOS FROM SERVER ----------------------


export const loadPhotos = photos => ({
    type: actionTypes.LOAD_PHOTOS,
    payload: photos
})

export const photosLoading = () => ({
    type: actionTypes.PHOTOS_LOADING
})

export const photosFailed = (errMess) => ({
    type: actionTypes.PHOTOS_FAILED,
    payload: errMess
})

export const fetchPhotos = () => dispatch => {
    dispatch(photosLoading());

    axios.get(baseUrl + "photos")
        .then(response => response.data)
        .then(photos => dispatch(loadPhotos(photos)))
        .catch(error=> dispatch(photosFailed(error.message)))
}

