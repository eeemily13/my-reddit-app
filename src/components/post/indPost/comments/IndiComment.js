import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatTimestamp } from "../../../../features/timeFunction";
import { selectTheme } from "../../../../features/themeSlice";
import defaultUserIcon from './user-icon.png';
import arrow from '../../../../arrow.svg';
import arrowNight from '../../../../arrowNight.svg';

export const IndiComment = ({ author, text, time}) =>  {
    const [userIcon, setUserIcon] = useState("");
    const theme = useSelector(selectTheme);

    useEffect(() => {
        async function fetchUserIcon() {
            try {
                const response = await fetch(`https://www.reddit.com/user/${author}/about.json`);
                if (response.ok) {
                    const jsonResponse = await response.json();
                    const { snoovatar_img } = jsonResponse.data;

                    if(snoovatar_img) {
                        setUserIcon(snoovatar_img);
                    }else{
                        setUserIcon(defaultUserIcon);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserIcon();
    }, [author]);

    if(!userIcon) {
        return;
    }
    if (!time) {
        return;
    }
    const formattedTime = formatTimestamp(time);

    return (
        <article className="indiComment">
            <div className="comment-header">
                <img src={!theme ? arrowNight : arrow} alt='arrow' className="comment-arrow" />
                <img src={userIcon} alt='user icon' className="userIcon" />
                <h5 className={!theme ? 'night-author-h5' : null}> {author} </h5>
                <p className={!theme ? 'time night-para' : 'time'}>{formattedTime}</p>
            </div>
            <div className={!theme ? 'comment-selftext night-c-s' : 'comment-selftext'}>
                <p className={!theme ? 'selftext night-selftext' : 'selftext'}>{text}</p>
            </div>

        </article>
    );
};