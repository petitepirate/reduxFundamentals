import {
    FETCH_POST,
    ADD_POST,
    REMOVE_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UPVOTE,
    DOWNVOTE
  } from "./actionTypes";
  
  export default function rootReducer(state = {}, action) {
    switch (action.type) {
  
      case FETCH_POST: {
        console.log("fetching post...");
        return { ...state, [action.post.id]: action.post };
      }
  
      case ADD_POST: {
        console.log("adding post...");
        return { ...state, [action.post.id]: { ...action.post, comments: [] }};
      }
  
      case UPDATE_POST: {
        console.log("updating post...");
        return { ...state, [action.post.id]: { ...action.post }};
      }
  
      case REMOVE_POST: {
        console.log("removing post...");
        let posts = { ...state };
        delete posts[action.postId];
        return posts;
      }
  
      case ADD_COMMENT: {
        console.log("adding comment");
        const post = state[action.postId];
        return { ...state, [action.postId]: {...post, comments: [...post.comments, {id: action.commentId, text: action.comment}] }  };
      }
  
      case REMOVE_COMMENT: {
        console.log("removing comment...");
        let posts = { ...state }
        let activePost = posts[action.postId];
        activePost.comments = activePost.comments.filter(comment => {
          return comment.id !== action.commentId;
        });
  
        return { ...state, [action.postId]: { ...activePost } }
      }
  
      case UPVOTE: {
        console.log("upvoted");
        let post = state[action.id];
        return {...state, [action.id]: {...post, votes: action.votes}}
      }
  
      case DOWNVOTE: {
        console.log("downvoted");
        let post = state[action.id];
        return {...state, [action.id]: {...post, votes: action.votes}}
      }
  
      default:
        return state;
    }
  }
