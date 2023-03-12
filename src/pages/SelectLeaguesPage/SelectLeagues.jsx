// Handles ALL of the league selection aspect => Shows all leagues and then handles the collection of leagues ID's when getting checked off

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../context/SleeperDataContext';

function SelectLeagues({ onLeaguesImported }) {
  const {userData} = useContext(DataContext)
  const [leagues, setLeagues] = useState([]);
  const navigate = useNavigate();
  const {leagueData, setLeagueData} = useContext(DataContext)
  

  useEffect(() => {
    const fetchLeagues = async () => {
      const userId = userData.user_id;
      const response = await axios.get(`https://api.sleeper.app/v1/user/${userId}/leagues/nfl/2023`);
      sleeperLeagues = response.data
      setLeagueData(sleeperLeagues)
      setLeagues(sleeperLeagues);
      console.log('sleeperLeagues', sleeperLeagues)
    }

    fetchLeagues();
  }, []);

  const handleCheckboxChange = (event, leagueId) => {
    const selectedLeagues = leagues.map((league) => {
      if (league.league_id === leagueId) {
        return { ...league, selected: event.target.checked };
      } else {
        return league;
      }
    });
    setLeagues(selectedLeagues);
  }

  const handleImportClick = async () => {
    const selectedLeagues = leagues.filter((league) => league.selected);
    const importedLeagues = await Promise.all(selectedLeagues.map((league) => {
      return axios.get(`https://api.sleeper.app/v1/league/${league.league_id}`).then((response) => response.data);
    }));
    onLeaguesImported(importedLeagues);
    navigate('/');
  }

  return (
    <div>
      <h1>Select Leagues</h1>
      {leagues.map((league) => (
        <div key={league.league_id}>
          <label>
            <input type="checkbox" checked={league.selected} onChange={(event) => handleCheckboxChange(event, league.league_id)} />
            {league.name}
          </label>
        </div>
      ))}
      <button onClick={handleImportClick}>Import Leagues</button>
    </div>
  );
      };
      
  export default SelectLeagues; 

