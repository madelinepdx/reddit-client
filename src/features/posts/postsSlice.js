// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts as fetchPostsFromApi } from '../../api/redditApi';

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit) => {
  const posts = await fetchPostsFromApi(subreddit);
  return posts;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
