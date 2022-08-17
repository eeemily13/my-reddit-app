import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import filterReducer from "./features/filterSlice";
import subredditsReducer from "./features/subredditSlice";
import searchReducer from "./features/searchTermSlice";
import themeReducer from "./features/themeSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer,
    subreddits: subredditsReducer,
    search: searchReducer,
    theme: themeReducer,
  },
});