import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTheme } from "../../features/themeSlice";
import { selectAllSubreddits } from "../../features/subredditSlice";

import defaultImg from '../../features/reddit-logo.png';

export const SubredditHeader = () =>{
    const allSubreddits  = useSelector(selectAllSubreddits);
    const { subreddit } = useParams();
    const mySubreddit = 'r/' + subreddit;
    const desiredProps = allSubreddits.find(
        (item) => item.subreddit === mySubreddit
    );
    const {description, subscribers, title } = desiredProps;
    let bannerImg = desiredProps.bannerImg;
    if (!bannerImg) {
        bannerImg = defaultImg;
    }
    const theme  = useSelector(selectTheme);

    useEffect(() => {
        let element = document.querySelector(".subreddit-header");
        element.style.backgroundImage = `url(${bannerImg})`;
    }, [title, bannerImg]);

    return (
        <>
            <div className="subreddit-header">
                <h1>{title}</h1>
                <p className="mySubreddit">{mySubreddit}</p>
                <p className="subscribers">{subscribers}</p>
            </div>
            <div className={!theme ? 'description night-description' : 'description'}>
                <h2>About community:</h2>
                <p>{description}</p>
            </div>
        </>
    )
}
