import React from 'react';

function Leaderboard({ entries }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name} - {entry.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
