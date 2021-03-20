import React from "react";
import { useDispatch } from "react-redux";
import { removeCommentFromAPI } from "../Reducers/Actions/posts";

const Comment = ({ comment, storyId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeCommentFromAPI(storyId, comment.id));
    }

    return (
        <div className="CommentComponent">
            <p><i onClick={handleDelete} className="fa fa-times text-danger mr-2 i-btn"/> {comment.text}</p>
        </div>
    );
}

export default Comment;
