import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
};

const searchTermSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearchTerm: (state, action) => {
            const { searchTerm } = action.payload;
            state.searchTerm = searchTerm;
        },
    },
});

export const { changeSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
export const selectSearchTerm = (state) => state.search.searchTerm;