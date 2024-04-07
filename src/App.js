import './App.css';
import React, { useState } from 'react';
import LeaderboardForm from './LeaderboardForm';
import Leaderboard from './Leaderboard';


function App() {
  const [entries, setEntries] = useState({    
    bench: [],
    squat: [],
    deadlift: [],
    mile: [],
    fiveK: [],
    tenK: []
  });

  const handleAddEntry = (category, newEntry) => {
    setEntries({
      ...entries, 
      [category]: [...entries[category], newEntry]
    });
  };  

  const handleClearEntry = (category) => {
    setEntries({
      ...entries,
      [category]: []
    });
  };
  
  return (
    <div className="App">
      <h1>TS Fitness Leaderboard</h1>
      <LeaderboardForm onAddEntry={handleAddEntry} />
      <div className="leaderboard-container">
        <div>
          <h2>Bench</h2>
          <Leaderboard entries={entries.bench} />
          <button onClick={() => handleClearEntry('bench')}>Clear Entries</button>
        </div>
        <div>
          <h2>Squat</h2>
          <Leaderboard entries={entries.squat} />
          <button onClick={() => handleClearEntry('squat')}>Clear Entries</button>
        </div>
        <div>
          <h2>Deadlift</h2>
          <Leaderboard entries={entries.deadlift} />
          <button onClick={() => handleClearEntry('deadlift')}>Clear Entries</button>
        </div>
        <div>
          <h2>1 Mile</h2>
          <Leaderboard entries={entries.mile} />
          <button onClick={() => handleClearEntry('mile')}>Clear Entries</button>
        </div>
        <div>
          <h2>5K</h2>
          <Leaderboard entries={entries.fiveK} />
          <button onClick={() => handleClearEntry('fiveK')}>Clear Entries</button>
        </div>
        <div>
          <h2>10K</h2>
          <Leaderboard entries={entries.tenK} />
          <button onClick={() => handleClearEntry('tenK')}>Clear Entries</button>
        </div>
      </div>
    </div>
  );

}

export default App;




