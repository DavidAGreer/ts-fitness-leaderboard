import React, { useState } from 'react';

function LeaderboardForm({ onAddEntry }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('bench');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEntry(category, { name, value });
    setName('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>        
        <option value="bench">Bench</option>
        <option value="squat">Squat</option>
        <option value="deadlift">Deadlift</option>
        <option value="mile">1 Mile</option>
        <option value="fiveK">5K</option>
        <option value="tenK">10K</option>
      </select>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add to Leaderboard</button>
    </form>
  );
}

export default LeaderboardForm;