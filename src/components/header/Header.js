import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../features/searchTermSlice";
import { useNavigate } from "react-router-dom";
import { toggleTheme, selectTheme } from "../../features/themeSlice";

import logo from '../../features/reddit-logo.png';
import search from '../../search.svg';
import searchNight from '../../search-night.svg';
import day from '../../day.svg';
import github from '../../github.png';
import night from '../../night.svg';

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector(selectTheme);

    //night to day switch
    let htmlElement = document.querySelector("html");
    useEffect(() =>{
        if(!theme) {
            htmlElement.style.backgroundColor = "#121c2d";
        } else {
            htmlElement.style.backgroundClip = "#fcfcfc";
        }
    }, [theme, htmlElement.style]);

    const handleSubmit = (e) => {
        dispatch(changeSearchTerm({searchTerm}));
        navigate.push(`/search/${searchTerm}`);
        setSearchTerm("");
    };

    return (
        <nav className={!theme ? "night-nav" : null}>
            <section className="nav-content">
                <div className="logo">
                    <a href=" add a web address">
                        <img src={!theme ? logo : logo} alt="logo" />
                    </a>
                </div>
                <form
                className={!theme ? "night-form search-bar" : "search-bar"}
                onSubmit={handleSubmit}
                >
                <input
                    type="text"
                    className='searchBar'
                    id="searchTerm"
                    placeholder="Search reddit"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label htmlFor="searchTerm">
                    <button
                    className='search-icon'
                    type="button"
                    onClick={handleSubmit}
                    >
                    <img src={!theme ? searchNight : search} alt="" />
                    </button>
                </label>
                </form>
                <div className="nav-icons">
                    <h2>Welcome to Minimal reddit</h2>
               
                <div className="github">
                    <a
                    href="https://github.com/eeemily13/my-reddit-app"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={github} alt="" />
                    </a>
                </div>
                </div>
            </section>
    </nav>
    )
}