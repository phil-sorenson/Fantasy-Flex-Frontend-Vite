
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';


const SleeperLogin = () => {
  
  const [username, setUsername] = useState('');
  const {setUser} = useContext(UserContext)
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
  const handleLeagueSync = async () => {
      try {
        const response = await axios.get(
          'https://api.sleeper.app/v1/user/' + username
        );
      const user = response.data;
      setUser(user);
      navigate('/select-league');
    } catch (error) {
      console.error(error);
      setError('Invalid username, Try Again.')
    }
  };

  return (
    <div>
      <h2>Keep track of your Sleeper Leagues!</h2>
      <h4>Enter Sleeper Username to Start Sync</h4>
      <form onSubmit={handleLeagueSync}>
        <label>
          Sleeper Username:
          <input placeholder='Username' type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="submit">Start League Sync</button>
        <text>Email Address will NOT work -- must be Username</text>
        {error && <p>error</p>}
      </form>
    </div>
  );
}

export default SleeperLogin;

