import React from "react";
import { useState } from "react";

export default function MythicHome() {
  const [nickname, setNickname] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  if (!loggedIn) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #4B0082, #8A2BE2)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🌌 Welcome to Mythic</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Choose a name worthy of legends</p>
        <input
          placeholder="Enter your mythical name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem', color: 'black', borderRadius: '4px' }}
        />
        <button onClick={handleLogin} style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', backgroundColor: '#6A0DAD', border: 'none', borderRadius: '4px', color: 'white' }}>
          Enter with World ID
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>⚔️ Greetings, {nickname}!</h1>
      <div style={{ backgroundColor: '#222', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <p>💰 Balance: <strong>0.00 MC</strong></p>
        <p>📈 Reputation: <strong>0</strong></p>
        <p>🧬 Lineage: <strong>None — you are the firstborn</strong></p>
      </div>
      <button style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#4B0082', border: 'none', borderRadius: '4px', color: 'white' }}>💎 Deposit treasure</button>
      <button style={{ padding: '0.5rem 1rem', backgroundColor: '#333', border: 'none', borderRadius: '4px', color: 'white' }}>🗳️ Vote for the legends</button>
    </div>
  );
}
