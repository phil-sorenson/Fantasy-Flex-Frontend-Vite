// FixMe: UseContext(DataContext) ==> All DataContext information (userData & leagueData) gone after page refresh
//-ToDo: Import Leagues button leads to nothing
//-ToDo: Render each of the user's specific {selectedLeagues} as opposed to just the rosters
// Note: 

import React, { useState, useEffect, useContext} from 'react'
import DataContext from '../../context/SleeperDataContext';
import axios from 'axios';
import { Form, Button, FormCheck } from 'react-bootstrap';


function UpdatedSelectLeagues() {
  const{userData, leagueData, setLeagueData} = useContext(DataContext);
  const [selectedLeagues, setSelectedLeagues] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const userId = userData.user_id
      const response = await axios.get(
        `https://api.sleeper.app/v1/user/${userId}/leagues/nfl/2023`
      );
      const leagues = response.data
      setLeagueData(leagues);
      setLeagues(leagues);
      console.log('sleeperLeagues', leagues)
    };

    fetchLeagues();
  }, []);



  const handleLeagueSelection = (event) => {
    const leagueId = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedLeagues ([...selectedLeagues, leagueId]);
      console.log('selected', selectedLeagues)
    } else {
      setSelectedLeagues(selectedLeagues.filter(id => id !== leagueId));
      console.log('updated-selected', selectedLeagues)
    }
  }

  const handleImportLeagues = async () => {
    try {
      for (const leagueId of selectedLeagues) {
        const response = await axios.get(`https://api.sleeper.app/v1/league/${leagueId}/rosters`);
        const leagueData ={
          ...response.data,
          league_id: leagueId,
          user_roster: response.data.find(roster => roster.owner_id === userData.user_id)
        };
        setLeagueData(leagueId, leagueData);
        console.log('user-rosters', leagueData);
      }
    } catch (error) {
      console.log(error.message);
    }
    setSelectedLeagues([])
  }


  return (
    <>
    <h4>Select Leagues to Import!</h4>
    <Form>
      {leagues.map((league) =>(
        <div key={league.league_id}>
          <label>
            <FormCheck
            type='checkbox'
            id={league.league_id}
            label={league.name}
            value={league.league_id}
            onChange={handleLeagueSelection}
            checked={leagueData.includes(league.league_id)}//league.league_id in leagueData}
            />
            {/* {league.name} */}
          </label>
        </div>
      ))}
      <Button variant='primary' onClick={handleImportLeagues} disabled={selectedLeagues.length === 0}>Import Selected Leagues</Button>
    </Form>
    </>
  )
}

export default UpdatedSelectLeagues