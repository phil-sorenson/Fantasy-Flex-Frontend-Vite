// Handles ALL of the league selection aspect => Shows all leagues and then handles the collection of leagues ID's when getting checked off ==> Maps through all those selected leagues and get all the users in each ==> maps through that to get the user's specific leagues and rosters

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../context/SleeperDataContext';
import useAuth from '../../hooks/useAuth';

function SelectLeagues({ onLeaguesImported }) {
  
  const {userData} = useContext(DataContext);
  const {leagueData, setLeagueData} = useContext(DataContext);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeagues, setSelectedLeagues] = useState([]);
  const navigate = useNavigate();
  const {user, token} = useAuth();
  


  useEffect(() => {
    const fetchLeagues = async () => {
      const userId = userData.user_id
      const response = await axios.get(
        `https://api.sleeper.app/v1/user/${userId}/leagues/nfl/2023`
      );
      const leagues = response.data.map((league) => ({
        ...league,
          selected: false,
      }));
      setLeagueData(leagues);
      setLeagues(leagues);
      console.log('sleeperLeagues', leagues)
    };

    fetchLeagues();
  }, []);

  const handleCheckboxChange = (event, leagueId) => {
    const updatedLeagues = leagues.map((league) => {
      if (league.league_id === leagueId) {
        return { ...league, selected: event.target.checked };
      } else {
        return league;
      }
    });
    setLeagues(updatedLeagues);
    console.log('updatedLeagues', updatedLeagues)
  }

  // const fetchSelectedTeams = async () => {
  //   const response = await axios.get(`https://api.sleeper.app/v1/league/${league.league_id}`)
  // }

  const handleImportClick = async () => {
    const selectedLeagues = leagues.filter((league) => league.selected);
    const importedLeagues = await Promise.all(selectedLeagues.map(async (league) => {
      const usersResponse = axios.get(`https://api.sleeper.app/v1/league/${league.league_id}/users`);
      const leagueUsers = usersResponse.data;
      const rosterResponse = await axios.get(`https://api.sleeper.app/v1/league/${league.league_id}/rosters`)
      const leagueRosters = rosterResponse.data
      const user = leagueUsers.find((user) => 
        user.user_id === userData.user_id);
      const userTeams = leagueRosters.filter((roster)=> 
        roster.owner_id === userData.user_id);
      
      const userTeamObject = userTeams.map(() => {
        return {
          avatar: userData.avatar,
          team_name: userData.username,
          league_name: league.name,
          scoring_setting: league.scoring_settings.rec
          //* Figure out how to identify what each int means (1.0 = PPR, 0.5 = Half-PPR)
        };
      });
      
      return userTeamObject;
  
     
    
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

