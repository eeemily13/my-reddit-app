import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { 
        selectAllPosts,
        selectStatus,
        fetchPosts,
        fetchPostsBasedOnSearch,
} from '../../features/postSlice';
import { selectFilter, changeFilter } from '../../features/filterSlice';
import { selectSearchTerm, changeSearchTerm } from '../../features/searchTermSlice';
import { IndiPost } from "./indPost/indiPost";
import { Spinner } from "../spinner/spinner";

export const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const status = useSelector(selectStatus);
    const filter = useSelector(selectFilter);
    const url = useParams();

    const { subreddit } = useParams();
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        const payload = {filter, subreddit: subreddit ? subreddit : 'popular'};
        if (url.searchTerm) {
            dispatch(fetchPostsBasedOnSearch(searchTerm));
            dispatch(changeFilter({ nameOfFilter: 'hot'}));
            return;
        } else {
            dispatch(fetchPosts(payload));
            dispatch(changeSearchTerm({ searchTerm: ''}));
            return;
        }
    }, [filter, url, dispatch, searchTerm, subreddit]);

    if (status === 'loading') {
        return <Spinner />;
    }
    if(status === 'succeeded') {
        return (
            <>
                {posts.map((post, id) => (
                    <IndiPost key={id} {...post} />
                ))}
            </>
        );
    }
};