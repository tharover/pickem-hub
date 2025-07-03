import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/leaderboard.json')
      .then(res => res.json())
      .then(setEntries);
  }, []);

  return (
    <section>
      <h2>🏆 Leaderboard</h2>
      {entries.length === 0 ? <p>Loading...</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th align="left">Player</th>
              <th align="right">Score</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(({ name, score }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td align="right">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}