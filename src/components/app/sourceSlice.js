import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const baseUrl = 'https://www.reddit.com/r/dogs';
export const redditURL = 'https://www.reddit.com';

export const urlFilters = {
    default: '',
    hot: '/hot',
    new: '/new',
    top: '/top',
    topNow: '/top/?t=hour',
    topThisWeek: '/top/?t=week',
    topThisMonth: '/top/?t=month',
    topThisYear: '/top/?t=year',
    topAllTime: '/top/?t=all',
    rising: '/rising',
}

export const fetchData = createAsyncThunk('fetchdata', async (url) =>
    await fetch(url)
    .then(response =>(response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
    )

    const initialState = {
        status: 'idle',
        url: baseUrl + urlFilters.default + '.json',
        error: null,
        data: [],
    }

    const sourceSlice = createSlice({
        name:'source',
        initialState,
        reducers: {
            filterChanged(state, action) {
                const page = action.payload
                state.url = baseUrl + urlFilters[page] + '.json'
                state.status = 'idle'
            },
            urlChanged(state, action) {
                const page = action.payload;
                state.url = redditURL + page + '.json'
                state.status = 'idle'
            }
        },
        extraReducers: {
            [fetchData.pending]: (state, action) => {
                state.status = 'loading'
            },
            [fetchData.fulfilled]: (state, action) => {
                const newData = action.payload;
                state.data = newData;
                state.status = 'succeeded'
            },
            [fetchData.rejected]: (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            },
        }
    })

    export const { filterChanged } = sourceSlice.actions;
    export const { urlChanged } = sourceSlice.actions;
    export const selectUrl = state => state.source.url;
    export const selectPosts = state => state.source.data;
    export default sourceSlice.reducer;