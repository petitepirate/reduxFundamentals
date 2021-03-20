import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import VotesDisplay from "./VotesDisplay";
import { removePostFromAPI, fetchPostFromAPI } from "../Reducers/Actions/posts";

const PostPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { postId } = useParams();
    let currentStory = useSelector(st => st.posts[postId]);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditState = () => {
        setIsEditing(isEditing => !isEditing);
    }

    useEffect(() => {
        async function getPost() {
            dispatch(fetchPostFromAPI(postId));
        }
        if (!currentStory) {
            getPost();
        }

    }, [dispatch, postId, currentStory]);

    const deleteStory = () => {
        dispatch(removePostFromAPI(currentStory.id));
        history.push("/");
    }

    const renderTitle = () => {
        return (
            <>
                <h2>{currentStory.title}</h2>
                <p><i>{currentStory.description}</i></p>
            </>
        )
    }

    const renderPage = () => {
        if (isEditing) {
            return <PostForm story={currentStory} formType="edit" toggleEditState={toggleEditState} />;
        } else {
            return <PostDetail story={currentStory} toggleEditState={toggleEditState} />;
        }
    }

    return (
        <div className="PostPage">
            <div className="PostPage d-flex justify-content-between">
                <div>
                {
                    currentStory ? renderTitle() : <div>Loading...</div>
                }
                </div>
                <div className="PostDisplay-edit-area d-flex flex-column align-self-end">
                    <div className="grouping align-self-end">
                        <i className="fas fa-edit fa-2x text-primary mx-1 my-2 i-btn" onClick={toggleEditState} />
                        <i className="fas fa-times fa-2x text-danger mx-1 my-2 i-btn" onClick={deleteStory}/>
                    </div>
                    
                {
                    currentStory ? <VotesDisplay storyId={currentStory.id} votes={currentStory.votes} /> : <div>Loading...</div>
                }
                    
                </div>
            </div>
            
            
            {
                currentStory ? renderPage() : <div>Loading...</div>
            }
                
            
        </div>
    );
}

export default PostPage;
