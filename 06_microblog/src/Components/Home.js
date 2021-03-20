import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from "../Actions/titles";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const stories = useSelector(st => st.titles);


    useEffect(() => {
        async function fetchTitles() {
            try {
                await dispatch(fetchTitlesFromAPI());
                setIsLoading(false);
            } catch(err) {
                return (
                    <div>Error</div>
                );
            }

        }
        fetchTitles();
    }, [dispatch])

    const renderLoading = () => {
        return <div>Loading...</div>
    }

    const renderView = () => {
        return (
            <div className="Home">
                {stories.map(story => <StoryCard story={story} key={story.id} />)}
            </div>
        );
    }

    return (
        <>
        { 
            isLoading ? renderLoading() : renderView()
        }
        </>
    );
}

export default Home;
