// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts as fetchPostsFromApi } from '../../api/redditApi';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit) => {
  const posts = await fetchPostsFromApi(subreddit);
  return posts;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => action.payload,
    upvote: (state, action) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.ups += 1;
      }
    },
    downvote: (state, action) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.ups -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPosts, upvote, downvote } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
