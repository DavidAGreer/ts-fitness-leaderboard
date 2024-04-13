import React, { useState, useEffect } from 'react';

function Leaderboard({ entries }) {  
const sortedEntries = entries.sort((a, b) => b.value - a.value);



  return (
    <div>
      <table className="leaderboard">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        {sortedEntries && sortedEntries.map((entry, index) => (
          <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.value}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}


export default Leaderboard;
