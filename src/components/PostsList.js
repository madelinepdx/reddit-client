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
      {posts.map((post) => {
        let imageUrl = null;
        if (post.preview && post.preview.images && post.preview.images[0]) {
          imageUrl = post.preview.images[0].source.url.replace(/&amp;/g, '&');
        } else if (post.thumbnail && post.thumbnail.startsWith('http')) {
          imageUrl = post.thumbnail;
        }

        return (
          <li key={post.id}>
            <div className="vote-section">
              <button onClick={() => handleUpvote(post.id)}>▲</button>
              <span>{post.ups}</span>
              <button onClick={() => handleDownvote(post.id)}>▼</button>
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              {imageUrl && <img src={imageUrl} alt="Post preview" className="post-image" />}
              <p>{post.selftext.substring(0, 100)}...</p>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;

