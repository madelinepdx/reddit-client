import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostsList from './components/PostsList';
import SearchBar from './components/SearchBar';
import './App.css';
import { fetchPosts } from './features/posts/postsSlice';
import logo from './assets/reddit.svg'; 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Fetching posts on App mount');
    dispatch(fetchPosts('javascript'));
  }, [dispatch]);

  const onSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    dispatch(fetchPosts(searchTerm));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>RedditSeddit</h1>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        <PostsList />
      </main>
    </div>
  );
}

export default App;
