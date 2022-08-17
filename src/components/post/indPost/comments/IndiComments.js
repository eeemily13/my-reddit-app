import React, { useState, useEffect } from "react";
import { formatTimestamp } from "../../../../features/timeFunction";
import defaultUserIcon from './user-icon.png';
import arrow from '../../../../arrow.svg';

export const IndiComment = ({ author, text, time}) =>  {
    const [userIcon, setUserIcon] = useState("");
  

    useEffect(() => {
        async function fetchUserIcon() {
            try {
                const response = await fetch(
                    `https://www.reddit.com/user/${author}/about.json`
                    );
                if (response.ok) {
                    const jsonResponse = await response.json();
                    const { snoovatar_img } = jsonResponse.data;

                    if(snoovatar_img) {
                        setUserIcon(snoovatar_img);
                    } else {
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
                <img src={arrow} alt='arrow' className="comment-arrow" />
                <div className="user-author-time">
                    <img src={userIcon} alt='user icon' className="user-icon" />
                    <h5 className='indi-author'> {author} </h5>
                    <p className='indi-time'>{formattedTime}</p>
                </div>
            </div>
            <div className='text-body'>
                <p className='indi-text'>{text}</p>
            </div>

        </article>
    );
};