import axios from "axios";
import {
  ADD_POST, 
  REMOVE_POST,
  FETCH_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPVOTE,
  DOWNVOTE
} from "../Reducers/actionTypes";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function sendPostToAPI({title, description, body}) {
    return async function(dispatch) {
        const response = await axios.post(`${API_URL}`, {
            title, 
            description, 
            body
        });
        return dispatch(addPost(response.data));
    }
}

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function removePostFromAPI(id) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${id}`)
        return dispatch(removePost(id));
    }
}

function removePost(postId) {
    return {
        type: REMOVE_POST,
        postId
    };
}

export function fetchPostFromAPI(postId) {
    return async function(dispatch) {
        let response = await axios.get(`${API_URL}/${postId}`);
        return dispatch(fetchPost(response.data));
    };
}

function fetchPost(post) {
    return {
        type: FETCH_POST,
        post
    };
}

export function updatePostFromAPI({ id, title, description, body }) {
    return async function(dispatch) {
        const response = await axios.put(`${API_URL}/${id}`, {
            title,
            description,
            body
        });
        return dispatch(updatePost(response.data))
    }
}

function updatePost(post) {
    return {
        type: UPDATE_POST,
        post,
    };
}

export function addCommentToAPI(postId, comment) {
    return async function(dispatch) {
        const response = await axios.post(`${API_URL}/${postId}/comments`, {
            post_id: postId,
            text: comment
        });
        return dispatch(addComment(response.data, postId));
    }
}

function addComment(apiResponse, postId) {
    return {
        type: ADD_COMMENT,
        postId,
        commentId: apiResponse.id,
        comment: apiResponse.text
    };
}

export function removeCommentFromAPI(postId, commentId) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${postId}/comments/${commentId}`)
        return dispatch(removeComment(postId, commentId));
    }
}

function removeComment(postId, commentId) {
    return {
        type: REMOVE_COMMENT,
        postId,
        commentId
    }
}

export function voteToAPI(direction, postId) {
    let type = direction === "up" ? UPVOTE : DOWNVOTE;
    return async function(dispatch) {
        const response = await axios.post(`${API_URL}/${postId}/vote/${direction}`);
        dispatch(vote(postId, direction, type, response.data.votes));
    }
}

function vote(id, direction, type, votes) {
    return {
        id,
        type,
        direction,
        votes
    }
}
