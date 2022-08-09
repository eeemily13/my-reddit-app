import React from 'react';
import LikeCounter from './social/like/likeCounter';
import ShareLink from './social/share/shareLink';


import Comments from './social/comment/Comments';



export default function Post(props) {
  const { userImg, userId, title, data} = props;
  
return (
  <article className='post'>
    <article className='user'>
      <img src={userImg} alt="user-logo"/>
      <h6>{userId}</h6>
    </article>
    <article className="postData">
      <article><h2>{title}</h2></article>
      <img src={data} alt="puppies" className='dataImg'/>
    </article>
    <article className='social'>
      <LikeCounter />
      <Comments currentUserId='1' className="comments"/>  
      <ShareLink className='shareLink'/>   
     
      

      
    </article>
  </article>
    
    );
}