import React from 'react';
import Header from './components/header/Header'
import Post from './components/post/post';
import posts from './components/post/posts';


//css import
import './index.css';





function App(){

  return  ( 
    <section className='app'>
      <Header />
      <section className='body'>
        <section className='postlist'>
          {posts.map((post) =>{
            return (
              <Post key={posts.id} {...post}></Post>
            )}
          )}
        </section>
      </section>
    
    </section>
)}  

export default App;





