import React from "react";

import { SearchBar } from './Search/SearchBar';

const pageTitle = 'Reddit Minimal';

export default function Header() {
   
    return (
        <header className="header">
            <img src='reddit-logo.png' alt='logo' className="reddit-logo"/>
                <h1 >{pageTitle}</h1>
            <SearchBar className='searchBar'/>
        </header>
)} 

