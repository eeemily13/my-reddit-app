import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSubreddits,
  selectAllSubreddits,
  selectStatus,
} from "../../features/subredditSlice";
import { Link, NavLink } from "react-router-dom";

// images
import home from "../../home.jpg";
import showArrow from "../../showArrow.svg";
import arrow from "../../arrow.svg";


export const Subreddits = () => {
  const [showSubreddits, setShowSubreddits] = useState(true);
  const dispatch = useDispatch();
  const subreddits = useSelector(selectAllSubreddits);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <Link to="/" className= "subreddit-home">
        <img src={home} alt="home" />
        <h6 className="h6-title">Home</h6>
      </Link>
      <button
        className="toggle-button"
        onClick={() => setShowSubreddits(!showSubreddits)}
      >
        <img
          src={showArrow}
          alt="toggle arrow"
          className={`${showSubreddits && status === "succeeded" ? "arrow-up" : "arrow-down"}`}
        />
        <h6 className='subreddit-title'>Subreddits</h6>
      </button>
    <div>
      {showSubreddits
        ? subreddits.map((subreddit, id) => {
            return (
              <div className="links" key={id}>
                <img src={arrow} alt="arrow" />
                <NavLink to={`/${subreddit.subreddit}`}
                  className='link-to-subreddit'
                  activeClassName="clicked-link">
                  {subreddit.subreddit}
              </NavLink>
              </div>
            );
          })
        : null}
      </div>
    </>
  );
};