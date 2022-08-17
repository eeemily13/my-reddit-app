import React from "react";
import './index.css';
import { Routes } from "react-router";
import {  Route } from 'react-router-dom';
import { Subreddits } from './components/subreddits/SubredditList';
import { Filter } from './components/filter/Filter';
import { HomePage } from './components/page';
import { SubredditPage } from './components/SubredditPage';
import { ErrorPage } from './components/errorPage';
import { SearchPage } from './components/SearchPage';
import { Header } from './components/header/Header';
import { Trending } from './components/trending/Trending';


function App() {

  
  return (
    <>
      <Header />
      <div className="mainContent">
        <section className="subreddits-side">
          <Subreddits />
        </section>
        <section className="trending-section">
          <Trending />
        </section>
        <section className="filter-and-posts">
          <Filter />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/r/:subreddit" element={<SubredditPage />} />
              <Route exact path="/search/:seatchTerm" element={<SearchPage />} />
              <Route exact path="/:error" element={<ErrorPage />} />
            </Routes>
        </section>
      </div>
    </>
  );
}

export default App;