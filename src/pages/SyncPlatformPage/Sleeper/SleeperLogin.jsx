
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../../context/UserContext';
import { DataContext } from '../../../context/SleeperDataContext';
import { useAuth } from '../../../hooks/useAuth';

const SleeperLogin = () => {
  const {user, token} = useAuth()
  const [username, setUsername] = useState('');
  const {setUserData} = useContext(DataContext)
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
  const handleLeagueSync = async () => {
      try {
        const response = await axios.get(
          `https://api.sleeper.app/v1/user/${username}`, {
            headers: {
              Authorization: "Bearer " + token } 
          });
      const sleeperUser = response.data;
      setUserData(sleeperUser);
      console.log('userData', sleeperUser)
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


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation, useAuth } from 'react-router-dom';
// import { DataContext } from '../../../context/SleeperDataContext';

// const SyncSleeper = (props) => {
  
//   const [username, setUsername] = useState('');
//   const { setUserData } = useContext(DataContext);
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   async function handleSync () {
//     try {
//       const { data } = await axios.get(
//         `https://api.sleeper.app/v1/user/${username}`
//         );
//       setUserData(data);
//       navigate('/select-league')
//         console.log('data', data);
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   const platform = new URLSearchParams(location.search).get('platform');

//   return ( 
//     <div>
//       <h2>{platform.toUpperCase()} Sync</h2>
//       <input
//       type='text'
//       placeholder='Username'
//       value={username}
//       onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleSync}>Start League Sync</button>
//     </div>
//    );
// };
 
// export default SyncSleeper;
