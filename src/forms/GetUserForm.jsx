import React, { useState, useEffect } from 'react';

const GetUserForm = ({ platformName, onSubmit}) => {
  
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