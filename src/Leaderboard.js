import React from 'react';

function Leaderboard({ entries }) {
  const sortedEntries = entries && entries.sort((a, b) => {
    if (typeof a.value === 'string' && typeof b.value === 'string') {
      // Assuming time is in the format of mm:ss
      const [aMinutes, aSeconds] = a.value.split(':');
      const [bMinutes, bSeconds] = b.value.split(':');
      const aTotalSeconds = parseInt(aMinutes) * 60 + parseInt(aSeconds);
      const bTotalSeconds = parseInt(bMinutes) * 60 + parseInt(bSeconds);
      return aTotalSeconds - bTotalSeconds;
    } else {
      return b.value - a.value;
    }
  });

  const updatedEntries = sortedEntries && sortedEntries.reduce((acc, entry) => {
    const existingEntry = acc.find(e => e.name === entry.name);
    if (existingEntry) {
      existingEntry.value = entry.value;
    } else {
      acc.push(entry);
    }
    return acc;
  }, []);

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
        {updatedEntries && updatedEntries.map((entry, index) => (
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
