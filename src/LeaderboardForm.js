import React, { useState } from 'react';

function LeaderboardForm({ onAddEntry }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEntry({ name, time });
    setName('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Best Mile Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add to Leaderboard</button>
    </form>
  );
}

export default LeaderboardForm;