// Get user with username api call --> Want this to return a list of leagues that the user belongs to 
import React, { useState, useEffect } from 'react';
// import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import GetUserForm from '../../../../forms/GetUserForm';

const SleeperUser = ({ username }) => {
  // useAuth = {user, token}
  const [user, setUser] = useState(null)
   

  useEffect(() => {
    const getUser = async () => {
      try {
        
      } catch (error) {
        
      }
    }
      const URL = `https://api.sleeper.app/v1/user/${username}`;
      const response = await axios.get(URL);
      // const sleeperUserData = await response.json();

    }
  })

  
  return ( 
    <div>

    </div>

   );
}
 
export default SleeperUser;