import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = ({ story }) => {
    if (!story.comments) story.comments = [];
    return (
        <main className="CommentSection mb-4">
            <h2>Comments</h2>
            {
                story.comments.map(comment => <Comment comment={comment} key={comment.id} storyId={story.id} />)
            }
            <CommentForm storyId={story.id} />
        </main>
    );
}

export default CommentSection;
