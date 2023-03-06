// When Sleeper is clicked, this form will pop up and have User input user

// import React, { useContext, useState, useEffect } from "react";
// import { UserContext } from "../../../../context/UserContext";

// const UserForm = () => {
  
//   const [username, setUsername] = useState('');
//   const {setUser} = useContext(UserContext)
  
//   return ( 
//     <form>
//       <label htmlFor="user-form">Enter Username</label>
//       <input
//         type='text'
//         name="username"
//         id="username"
//         placeholder="Enter Username"
//         value={username}      
//       />

      
//     </form>
//    );
// }
 
// export default UserForm;

import React, { useState, useEffect } from 'react';

const GetUserForm = ({ platformName, onUserSubmit}) => {
  
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };
  
  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor='username-input'>{`Enter Your ${platformName} Username:`}</label>
      <input
        id='username-input'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
   );
}
 
export default GetUserForm ;