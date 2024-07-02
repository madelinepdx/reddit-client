// src/components/PostsList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts } from '../features/posts/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    console.log('Dispatching fetchPosts');
    dispatch(fetchPosts('javascript'));
  }, [dispatch]);

  console.log('Posts:', posts);

  if (!posts.length) {
    return <p>Loading posts...</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.selftext}</p>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
