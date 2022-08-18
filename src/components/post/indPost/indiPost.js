import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTargetSubredditIcon } from "../../../features/subredditSlice";
import { Comments } from "./comments/Comments";
import { Spinner } from "../../spinner/spinner";
import  { LikeCounter } from '../LikeCounter';



export const IndiPost = ({
  author,
  subreddit,
  time,
  title,
  text,
  image,
  score,
  numOfComments,
  id,
}) => {
  const [isTextLong, setIsTextLong] = useState(text && text.length > 250);
  const [comments, setComments] = useState(null);
  const [loadingComments, setLoadingComments] = useState("idle");
  const icon = useSelector((state) =>
    selectTargetSubredditIcon(state, subreddit)
  );

  const handleClick = async (subreddit, id) => {
    setLoadingComments("loading");
    // fetch comments
    const response_1 = await fetch(
      `https://www.reddit.com/${subreddit}/comments/${id}.json`
    );
    const jsonResponse = await response_1.json();
    const comments = jsonResponse[1].data.children;
    // destructuring comments
    const destructuredComms = comments.map((comment) => {
      const { author, body, created_utc } = comment.data;
      return { author: author, text: body, time: created_utc };
    });
    // console.log(destructuredComms);
    setLoadingComments("succeeded");
    setComments(destructuredComms);
  };

  return (
    <>
        <article className='indi-post'>
        <div className='head'>
            <img src={icon} alt="reddit-avatar" className="reddit-avatar" />
            
            <p className='indi-subreddit'>{subreddit}</p>
            <h5 className='indi-author'>Posted by u/{author}</h5>
            <p className='indi-time'>{time}</p>
        </div>
        <h4 className='indi-title'>{title}</h4>
        <p>{score}</p>
        <LikeCounter />
        {text ? (
            isTextLong ? (
            <p className='indi-text-length'>
                {text.substring(0, 250)}
                <button
                className="show-more"
                type="button"
                onClick={() => setIsTextLong(!isTextLong)}
                >
                ...continue reading
                </button>
            </p>
            ) : (
            <p className='indi-text'>{text}</p>
            )
        ) : null}
        {image ? (
            <div className="image-container">
            <img src={image} alt={title} />
            </div>
        ) : null}

        {loadingComments === "succeeded" ? (
            <Comments comments={comments} />
        ) : null}

        {!comments ? (
            <div className="btn-comments">
            <button
                onClick={() => handleClick(subreddit, id)}
                disabled={!numOfComments}
            >
                Comments <div className='indi-comments'></div>
                <span>{numOfComments}</span>
            </button>
            {loadingComments === "loading" ? <Spinner /> : null}
            </div>
        ) : null}
        </article>
    </>
  );
};