// import React, { useState, useEffect } from 'react';

// const UserLoginForm = ({ platformName, onUserSubmit}) => {
  
//   const [username, setUsername] = useState('');
//   const [currentUser, setCurrentUser] = useState(null)
  
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`https://api.sleeper.app/v1/user/${username}`);
//       onUserSubmit({
//           currentUser:{
//           platform: platformName,
//           username: response.data.username,
//           userId: response.data.user_id,
//           avatar: response.data.avatar,
//           displayName: response.data.display_name
//         }, 
//       }); console.log("currentUser", currentUser)
//     } catch (error) {
//       console.log(error.message)
//     };

//   const handleUsernameChange = (e) =>{
//     setUsername(e.target.value);
//   } 
  

//   };

    
//   return ( 
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='username-input'>{`Enter Your ${platformName} Username:`}</label>
//         <input
//           id='username-input'
//           type='text'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type='submit'>Start League Sync</button>
//       </div>
//     </form>
//    );
// }
 
// export default UserLoginForm;