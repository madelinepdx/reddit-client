// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostsList from './components/PostsList';
import { fetchPosts } from './features/posts/postsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Fetching posts on App mount');
    dispatch(fetchPosts('javascript'));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit Client</h1>
      </header>
      <main>
        <PostsList />
      </main>
    </div>
  );
}

export default App;
