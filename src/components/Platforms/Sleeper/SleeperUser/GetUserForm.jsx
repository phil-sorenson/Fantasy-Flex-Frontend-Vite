// When Sleeper is clicked, this form will pop up and have User input user

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../context/UserContext";

const UserForm = () => {
  
  const [username, setUsername] = useState('');
  const {setUser} = useContext(UserContext)
  
  return ( 
    <form>
      <label htmlFor="user-form">Enter Username</label>
      <input
        type='text'
        name="username"
        id="username"
        placeholder="Enter Username"
        value={username}      
      />

      
    </form>
   );
}
 
export default UserForm;