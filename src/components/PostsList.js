// src/components/PostsList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts, upvote, downvote } from '../features/posts/postsSlice';

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

  const handleUpvote = (id) => {
    dispatch(upvote(id));
  };

  const handleDownvote = (id) => {
    dispatch(downvote(id));
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div className="vote-section">
            <button onClick={() => handleUpvote(post.id)}>▲</button>
            <span>{post.ups}</span>
            <button onClick={() => handleDownvote(post.id)}>▼</button>
          </div>
          <h2>{post.title}</h2>
          <p>{post.selftext}</p>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          {post.thumbnail && post.thumbnail !== 'self' && (
            <img src={post.thumbnail} alt="Post thumbnail" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostsList;

