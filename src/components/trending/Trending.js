import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTargetSubredditIcon } from "../../features/subredditSlice";

export const Trending = ({
    title,
    text,
    image,
    id,
    subreddit,
}) => {
    const [trendingPosts, setTrendingPosts] = useState(null);
    const icon = useSelector((state) => 
    selectTargetSubredditIcon(state, subreddit)
    );

const handleClick = async(subreddit, id) => {
    const response_2 = await fetch(
        `https://www.reddit.com/r/news.json`
    );
    const jsonResponse = await response_2.json();
    const trendingNews = jsonResponse[0].data.children;
    const destruTrending = trendingPosts.map((post) => {
        const {title, body, image, id} = post.data;
        return { title: title, text: body, image: image, id: id }
    });
    setTrendingPosts(destruTrending);
};

return (
    <article className="trendin-news">
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
)
};