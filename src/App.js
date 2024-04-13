import './App.css';
import React, { useState, useEffect } from 'react';
import LeaderboardForm from './LeaderboardForm';
import Leaderboard from './Leaderboard';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState({    
    bench: [],
    squat: [],
    deadlift: [],
    mile: [],
    fiveK: [],
    tenK: []
  });

  const handleAddEntry = async (entry) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/entries`, entry);
      setEntries(entries => ({
        ...entries,
        [entry.category]: [...entries[entry.category], response.data]
      }));
      console.log(entries);
      return response.data;
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

 const handleClearEntry = async () => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/entries`);
    setEntries({    
      bench: [],
      squat: [],
      deadlift: [],
      mile: [],
      fiveK: [],
      tenK: []
    });
  } catch (error) {
    console.error('Error clearing leaderboard:', error);
  }
};

// Clear a single category
const handleClearCategory = async (category) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/entries/${category}`);
    setEntries(entries => ({
      ...entries,
      [category]: []
    }));
  }
  catch (error) {
    console.error('Error clearing leaderboard:', error);
  }
};


  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        console.log('${process.env.REACT_APP_BACKEND_URL}/api/entries');
        console.log(process.env.REACT_APP_BACKEND_URL);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/entries`);
        setEntries(response.data.reduce((acc, entry) => {
          acc[entry.category] = [...acc[entry.category], entry];
          return acc;
        }, { ...entries }));
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };
    fetchLeaderboardData();
  }, []);
  
  return (
    <div className="App">
      <h1>TS Fitness Leaderboard</h1>
      <LeaderboardForm onAddEntry={handleAddEntry} />
      <div className="leaderboard-container">
        <div>
          <h2>Bench</h2>
          <Leaderboard entries={entries.bench} />
          <button onClick={() => handleClearCategory('bench')}>Clear Entries</button>
        </div>
        <div>
          <h2>Squat</h2>
          <Leaderboard entries={entries.squat} />
          <button onClick={() => handleClearCategory('squat')}>Clear Entries</button>
        </div>
        <div>
          <h2>Deadlift</h2>
          <Leaderboard entries={entries.deadlift} />
          <button onClick={() => handleClearCategory('deadlift')}>Clear Entries</button>
        </div>
        <div>
          <h2>1 Mile</h2>
          <Leaderboard entries={entries.mile} />
          <button onClick={() => handleClearCategory('mile')}>Clear Entries</button>
        </div>
        <div>
          <h2>5K</h2>
          <Leaderboard entries={entries.fiveK} />
          <button onClick={() => handleClearCategory('fiveK')}>Clear Entries</button>
        </div>
        <div>
          <h2>10K</h2>
          <Leaderboard entries={entries.tenK} />
          <button onClick={() => handleClearCategory('tenK')}>Clear Entries</button>
        </div>
      </div>
    </div>
  );

}

export default App;




