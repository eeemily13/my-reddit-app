import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IndiComment } from "./IndiComments";
import { selectTheme } from '../../../../features/themeSlice'

export const Comments = ({ comments }) => {
    const [allComments] = useState(comments);
    const [displayedComments, setDisplayedComments] = useState([]);

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
        <section className='comments'>
        {displayedComments.map((comment, id) => {
            return <IndiComment {...comment} key={id}/>;
        })}
        {allComments.length !== 0 ? (
            <button onClick={displayComment}>Show more comments</button>
        ) : (
            <p className='no-comments'>No more comments</p>
        )}
        </section>
    );
};
