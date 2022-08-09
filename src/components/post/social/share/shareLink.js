import React from "react";
import {    FacebookShareButton,
            FacebookMessengerShareButton,
            TwitterShareButton,
            WhatsappShareButton,
            RedditShareButton,
            FacebookIcon,
            FacebookMessengerIcon,
            TwitterIcon,
            WhatsappIcon,
            RedditIcon,
            FacebookShareCount,
            RedditShareCount } from "react-share";

export default function ShareLink() {
    const shareUrl = 'reddit.com'
    return (
        <div className="shareButtons">
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40}/>
            </TwitterShareButton>
            <FacebookMessengerShareButton url={shareUrl}>
                <FacebookMessengerIcon size={40}/>
            </FacebookMessengerShareButton>
            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40}/>
            </WhatsappShareButton>
            <RedditShareButton url={shareUrl}>
                <RedditIcon size={40}/>
            </RedditShareButton>
        </div>
    )
}

