import React from "react";
import { useDispatch } from "react-redux";
import { urlChanged } from '../app/sourceSlice';
import {Link} from 'react-router-dom';

export default function Interactions(props) {
    const shareURL = `https://embed.redditmedia.com/widgets/embed?url=${props.data.url}`;
    const url = props.data.url;
    const permaLink = props.data.permaLink;
    const fixedLink = permaLink.slice(0, -1);

    const dispatch = useDispatch()

    function changeUrl() {
        dispatch(urlChanged(fixedLink))
    }
    let comments;

    if (props.comments === 'display') {
        comments = null;
    } else if (props.comment === 'hide') {
        comments = (<li><Link to={`/${props.id}`} onClick={changeUrl}>Comments</Link></li>)
    }

    return (
        <ul className="postInteractions">
            {comments}
            <li className="dropDown">
                <div className="copyButton">Copy</div>
                <div className="copyContent">
                    <input type='text' value={url} readOnly></input>
                    <button>Copy Url</button>
                </div>
            </li>
            <li><a href={shareURL} target="_blank" rel="noreferrer">Share</a></li>
        </ul>
    )
}