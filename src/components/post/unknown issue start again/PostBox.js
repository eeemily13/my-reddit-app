import React from "react";
import LikeCounter from './social/like/likeCounter';
import PostContent from "./postContent";


export default function PostBox (props) {
    let permaLink = `https://www.reddit.com/${props.data.permalink}`
    let picture;
    let postContent;
    let pictureContent;

    if(props.data.thumbnail_height === null) {
        postContent = <PostContent data={props.data} className={'postContentSmall'} id={props.id} comments={props.comments}/>
        pictureContent= null;
    } else {
        postContent = <PostContent data={props.data} className={'postContent'} id={props.id} comments={props.comments}/>
        }

    // if it has an image

    if(props.data.post_hint === 'image') {
        picture = props.data.url;
        pictureContent = (
            <figure className="post-media-container">
                <a href={permaLink} target="_blank" rel='noreferrer'>
                    <img className="post-imgage" alt='a dog' src={picture}/>
                </a>
            </figure>
        )

        //if gallery doesnt have a thumbnail
    }else if (props.data.is_gallery && props.data.thumbnail === 'default' ){
        pictureContent = (
            <figure className="post-media-container">
                <a href={permaLink}>
                    <img className="post-image-default" alt='a dog' src='' />
                    <figcaption className="defaul-image-text"><em>Image not found</em></figcaption>
                </a>
            </figure>
        )
        //for gallery return first image if possible
    }else if (props.data.is_gallery) {
        picture = props.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <a href={permaLink}>
                    <img className="post-img" alt='a dog' src={picture}/>
                </a>
            </figure>
        )
        //return videos correctly
    } else if(props.data.post_hint === 'rich:video') {
        picture = props.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <video className="post-video" auto-play controls>
                    <source src={picture}></source>Your browser doesnt support videos
                </video>
            </figure>
        )
     // return gifs correctly
    } else if (props.data.post_hint === 'rich:video') {
        picture = props.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <video className="post-video" autoPlay controls><source src={picture}></source>Your browser does not support the video tag</video>
            </figure>
        )
    // return GIPHY embedded gifs at least in thumbnail form
    } else if (props.data.post_hint === 'link') {
        picture = props.data.thumbnail;
        pictureContent = (
            <figure className="post-media-container">
                <a href={permaLink} target="_blank" rel="noreferrer">  
                    <img className="post-image" alt="a cat" src={picture} />
                </a>
            </figure>
        )
}

//return all cases
return (
    <div className="post-box">
        <LikeCounter LikeCounter={props.data.LikeCounter}/>
        {pictureContent}
        {postContent} 
    </div>
)
}
