import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IndiComment } from "./IndiComment";
import { selectTheme } from '../../../../features/themeSlice'

export const Comments = ({ comments }) => {
    const [allComments] = useState(comments);
    const [displayedComments, setDisplayedComments] = useState([]);
    const theme = useSelector(selectTheme);

    const displayComment = useCallback(
        () => {
            const splice = allComments.splice(0, 3);
            setDisplayedComments(prevState => prevState.concat(splice));
        },
        [allComments]
    )

    useEffect(() => {
        displayComment();
    }, [displayComment]);

    return (
        <section className={theme ? 'comments-night comments' : 'comments'}>
        {displayedComments.map((comment, id) => {
            return <IndiComment {...comment} key={id}/>;
        })}
        {allComments.length !== 0 ? (
            <button onClick={displayComment}>Show more comments</button>
        ) : (
            <p className={!theme ? 'no-more-night' : null}>No more comments</p>
        )}
        </section>
    );
};
