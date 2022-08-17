import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTargetSubredditIcon } from "../../../features/subredditSlice";
import { Comments } from './comments/Comments';
import { selectTheme } from '../../../features/themeSlice';
import { Spinner } from '../../spinner/spinner';

export const IndiPost = ({
    author,
    subreddit,
    time,
    title,
    text,
    image,
    numOfComments,
    id,
}) => {
    const [isTextLong, setIsTextLong] = useState(text && text.length > 250);
    const [comments, setComments] = useState(null);
    const [loadingComments, setLoadingComments] = useState('idle');
    const icon = useSelector((state) => 
        selectTargetSubredditIcon(state, subreddit)
    );
    const theme = useSelector(selectTheme);

    const handleClick = async (subreddit, id) => {
        setLoadingComments('loading');
        //fetching comments
        const responseComment= await fetch(
            `https://www.reddit/${subreddit}/commments/${id}.json`
        );
        const jsonResponse = await responseComment.json();
        const comments = jsonResponse[1].data.children
        const destructuredComment = comments.map((comment) => {
            const {author, body, creadted_utc} = comment.data;
            return {author: author, text: body, time: creadted_utc};
        });
        setLoadingComments('succeeded');
        setComments(destructuredComment);
        };

        return (
            <article className={!theme ? 'single-post night-single-post' : 'single-post'}>
                <div className={!theme ? 'head night-head' : 'head'}>
                    <img src={icon} alt="reddit-avatar" className="reddit-avatar" />
                    <h5 className={!theme ? 'night-h5' : null}>{author}</h5>
                    <p className={!theme ? 'subreddit-para night-para' : 'subreddit-para'}>to {subreddit}</p>
                    <p className={!theme ? 'time night-para' : 'time'}>{time}</p>
                </div>
                    <h4 className={!theme ? 'night-h4' : null}>{title}</h4>
                    {text ? (
                        isTextLong ? (
                            <p className={!theme ? 'selftext night-selftext' : 'selftext'}>
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
                            <p className={!theme ? 'selftext night-selftext' : 'selftext'}>{text}</p>
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
                                    Comments <div className={!theme ? 'white-stripe night-w-stripe' : 'white-stripe'}></div>
                                    <span>{numOfComments}</span>
                                </button>
                                {loadingComments === "loading" ? <Spinner /> : null}
                                </div>
                            ) : null}
        </article>
        );
    };