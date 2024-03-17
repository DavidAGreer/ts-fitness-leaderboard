import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LeaderboardForm from './LeaderboardForm';
import Leaderboard from './Leaderboard';


function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);};
  return (
    <div className="App">
      <h1>Mile Time Leaderboard</h1>
      <LeaderboardForm onAddEntry={handleAddEntry} />
      <Leaderboard entries={entries} />
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
