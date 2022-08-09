import React from 'react';
import ReactDom from 'react-dom';
import Post from './components/post/post.js';
//css import
import './index.css';
import posts from './components/post/posts.js';


const pageTitle = 'Welcome to Reddit Minimal';

function RedditMinimal(){
  return  ( <>
    <section className='header'>
      <Header />
      <section className='searchBar'>
        <SearchBar />
      </section>
    </section>
    <section className='body'>
      <section className='postlist'> 
        {posts.map((post)=>{
            return (
              <Post key={post.id} {...post}></Post>
                )}
      )}
        
      </section>
    </section>
    </>
)}  

const Header = () => <h1>{pageTitle}</h1>  
const SearchBar = () => <input type='text' name='searchbar'/>





ReactDom.render(<RedditMinimal/>, document.getElementById('root'));