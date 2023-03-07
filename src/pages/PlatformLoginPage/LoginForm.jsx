

// Needs to be changed around but the baseline code is functional & makes sense

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const SyncLeaguesPage = ({ jwt }) => {
  const [platform, setPlatform] = useState(null);
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);
  const [leagues, setLeagues] = useState([]);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleGetUserClick = async () => {
    try {
      const response = await axios.get(`https://api.sleeper.app/v1/user/${username}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetLeaguesClick = async () => {
    try {
      const response = await axios.get(`https://api.sleeper.app/v1/user/${user.user_id}/leagues/nfl`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setLeagues(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sync Leagues Page</h1>
      <label htmlFor="platform-select">Select a Platform:</label>
      <select id="platform-select" value={platform} onChange={handlePlatformChange}>
        <option value="sleeper">Sleeper</option>
      </select>
      <br />
      <label htmlFor="username-input">Enter Your Username:</label>
      <input id="username-input" type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <button onClick={handleGetUserClick}>Get User</button>
      <br />
      {user && (
        <>
          <h2>Leagues for {user.username}</h2>
          <button onClick={handleGetLeaguesClick}>Get Leagues</button>
          <ul>
            {leagues.map((league) => (
              <li key={league.league_id}>{league.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SyncLeaguesPage;







