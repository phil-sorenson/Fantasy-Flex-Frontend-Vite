// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { UserContext } from '../../context/UserContext';
// import { useNavigate } from 'react-router-dom';

// const LeagueSync = ({ leagues, onSelect }) => {
//   const {sleeperData} = useContext(UserContext)
//   const [selectedLeagues, setSelectedLeagues] = useState([]);
//   const navigate = useNavigate();

//   const handleLeagueSelection = async (leagueId) => {
//     try {
//       const { data } = await axios.get(`https://api.sleeper.app/v1/league/${leagueId}`)
//         setSelectedLeagues((prevSelectedLeagues) => [
//           ...prevSelectedLeagues,
//             data,
//         ]);
//       }   
//       catch (error) {
//       console.error(error);
//       }
//         };
        
//       const handleImportClick = () => {
//         navigate('/team-information');
//       };
        
//   return (
//     <div>
//       <h2>Imported Leagues</h2>
//       {userData.leagues.map((league) => (
//       <div key={league.league_id}>
//       <input
//       type='checkbox'
//       onChange={() => handleLeagueSelection(league.league_id)}
//       />
//       {league.name}
//       </div>
//       ))}
//       <button onClick={handleImportLeagues}>Import Leagues</button>
//     </div>
//   );
//   };
  
//   export default LeagueSync;


 
 
  
  // const handleLeagueChange = (e) => {
  //   const leagueId = e.target.value;

  //   if (selectedLeagues.includes(leagueId)) {
  //     setSelectedLeagues(selectedLeagues.filter((id) => id !== leagueId));
  //   } else {
  //     setSelectedLeagues([...selectedLeagues, leagueId]);
  //   }
  // };

//   const handleImportClick = () => {
//     onSelect(selectedLeagues);
//   };

//   return (
//     <div>
//       <h2>Select Leagues to Import</h2>
//       <ul>
//         {leagues.map((league) => (
//           <li key={league.league_id}>
//             <input
//               type="checkbox"
//               id={`league-${league.league_id}`}
//               value={league.league_id}
//               onChange={handleLeagueChange}
//             />
//             <label htmlFor={`league-${league.league_id}`}>{league.name}</label>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleImportClick}>Import</button>
//     </div>
//   );
// };
              
// export default SelectLeagues;


// // LeagueSelection.js

// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';

// const LeagueSelection = () => {
//   const { userData, setUserData } = useContext(UserContext);

//   return (
//     <div>
//       <h2>League Selection</h2>
//       {userData.selectedLeagues.map((league) => (
//         <div key={league.league_id}>
//           {league.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LeagueSelection;



