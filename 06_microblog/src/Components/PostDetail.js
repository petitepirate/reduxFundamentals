import React from "react";
import CommentSection from "./CommentSection";

const PostDetail = ({ story }) => {
    return (
    <div className="PostDetail">

      <p>{story.body}</p>
          <hr/>
      <CommentSection story={story} />

    </div>
    );
}

export default PostDetail;
