import { createSlice, createAsyncThunk } from '@/reduxjs/toolkit';

const initialState = {
    score: '',
    error: null,
};

export const fetchScore = createAsyncThunk(
    'score/fetchScore',
    async (payload) => {
        const { subreddit } = payload;
        const response_3 = await fetch(
            `https://www.reddit.com/${subreddit}.json`
        );
        const jsonResponse_3 = await response_3.json();
        const newScores = jsonResponse_3.data.children.map((scores) => {
            const { score } = score.data;
            return {
                score: score,
            };
        });
        return newScores;
    }
);

