import React, { useState, useEffect } from 'react';


const SelectLeague = ({ leagues, onSelect }) => {

  const [selectedLeagues, setSelectedLeagues] = useState([]);

  const handleLeagueChange = (e) => {
    const leagueId = e.target.value;

    if (selectedLeagues.includes(leagueId)) {
      setSelectedLeagues(selectedLeagues.filter((id) => id !== leagueId));
    } else {
      setSelectedLeagues([...selectedLeagues, leagueId]);
    }
  };

  const handleImportClick = () => {
    onSelect(selectedLeagues);
  };

  return (
    <div>
      <h2>Select Leagues to Import</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.league_id}>
            <input
              type="checkbox"
              id={`league-${league.league_id}`}
              value={league.league_id}
              onChange={handleLeagueChange}
            />
            <label htmlFor={`league-${league.league_id}`}>{league.name}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleImportClick}>Import</button>
    </div>
  );
};
              
export default SelectLeague;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUserLeagues } from "../api/sleeper";

// const SelectLeague = () => {
//   const [leagues, setLeagues] = useState([]);
//   const navigate = useNavigate();

//   const handleLeagueSelect = (leagueId) => {
//     // Add the selected league to local storage or global state management library
//     navigate("/dashboard");
//   };

//   const handleSyncLeagues = async () => {
//     try {
//       const userLeagues = await getUserLeagues();
//       setLeagues(userLeagues);
//     } catch (error) {
//       console.error(error);
//       // Display an error message to the user
//     }
//   };

//   return (
//     <div>
//       <h1>Select a League</h1>
//       <button onClick={handleSyncLeagues}>Sync Leagues</button>
//       <ul>
//         {leagues.map((league) => (
//           <li key={league.id}>
//             <button onClick={() => handleLeagueSelect(league.id)}>
//               {league.name} - {league.settings.league_type}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SelectLeague;
