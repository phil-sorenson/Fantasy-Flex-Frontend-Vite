// AllLeagues.js

import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const AllLeagues = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [selectedLeagueIds, setSelectedLeagueIds] = useState([]);

  const handleLeagueSelection = (leagueId) => {
    if (selectedLeagueIds.includes(leagueId)) {
      setSelectedLeagueIds(selectedLeagueIds.filter((id) => id !== leagueId));
    } else {
      setSelectedLeagueIds([...selectedLeagueIds, leagueId]);
    }
  };

  const handleImportLeagues = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      selectedLeagues: userData.leagues.filter((league) =>
        selectedLeagueIds.includes(league.league_id)
      ),
    }));
  };

  return (
    <div>
      
      <h2>All Leagues</h2>
      {userData.leagues.map((league) => (
        <div key={league.league_id}>
          <input
            type='checkbox'
            onChange={() => handleLeagueSelection(league.league_id)}
          />
          {league.name}
        </div>
      ))}
      <button onClick={handleImportLeagues}>Import Leagues</button>
    </div>
  );
};

export default AllLeagues;

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
