import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
        fetchSubreddits,
        selectAllSubreddits,
        selectStatus,
} from '../../features/subredditSlice';
import { Link, NavLink } from "react-router-dom";
import { Spinner } from "../spinner/spinner";
import { selectTheme } from "../../features/themeSlice";

import arrow from '../../arrow.svg';
import arrowNight from '../../arrowNight.svg';
import home from '../../home.svg';
import showArrow from '../../showArrow.svg';
import showArrowNight from '../../showArrowNight.svg';

export const Subreddits = () => {
        const [showSubreddits, setShowSubreddits] = useState(true);
        const dispatch = useDispatch();
        const subreddits = useSelector(selectAllSubreddits);
        const status = useSelector(selectStatus);
        const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <Link to="/" className={!theme ? "home home-night" : "home"}>
        <div className="stripe"></div>
        <img src={home} alt="home" />
        <h6>Home</h6>
      </Link>
      <button
        className="toggle-button"
        onClick={() => setShowSubreddits(!showSubreddits)}
      >
        <img
          src={!theme ? showArrowNight : showArrow}
          alt="toggle arrow"
          className={`${
            showSubreddits && status === "succeeded" ? "arrow-up" : "arrow-down"
          }`}
        />
        <h6 className={!theme ? "night-h6" : null}>Subreddits</h6>
      </button>

      {status === "loading" ? <Spinner /> : null}

      {showSubreddits
        ? subreddits.map((subreddit, id) => {
            return (
              <div className="links" key={id}>
                <img src={!theme ? arrowNight : arrow} alt="arrow" />
                <NavLink
                  to={`/${subreddit.subreddit}`}
                  className={
                    !theme
                      ? "night-link-to-subreddit link-to-subreddit"
                      : "link-to-subreddit"
                  }
                  activeClassName={
                    !theme ? "night-clicked-link" : "clicked-link"
                  }
                >
                  {subreddit.subreddit}
                </NavLink>
              </div>
            );
          })
        : null}
    </>
  );
};