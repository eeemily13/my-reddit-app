import React from "react";
import { Posts } from "./post/Posts";
import { SubredditHeader } from '../components/subreddits/SubredditHeader';

export const SubredditPage = () => {
    return (
    <>
        <SubredditHeader />
        <Posts /> 
    </>
    );
};