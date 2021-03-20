import React from "react";
import { useDispatch } from "react-redux";
import { voteToAPI } from "../Reducers/Actions/posts";

const VotesDisplay = ({ storyId, votes }) => {
    const dispatch = useDispatch();

    const handleUpVote = () => {
        dispatch(voteToAPI("up", storyId));
    }

    const handleDownVote = () => {
        dispatch(voteToAPI("down", storyId));
    }

    return (
        <div className="VotesDisplay">
            <span className="text-secondary">{votes} votes</span>
            <i onClick={handleUpVote} className="fas fa-thumbs-up i-btn green mx-1"></i>
            <i onClick={handleDownVote} className="fas fa-thumbs-down i-btn red mx-1"></i>
        </div>
    );
}

export default VotesDisplay;
