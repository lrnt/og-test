import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const userResult = await response.json()
      setUser(userResult.results[0]);
    }
    fetchUser();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={user && user.email} />
        <meta property="og:image" content={user && user.picture && user.picture.thumbnail} />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
