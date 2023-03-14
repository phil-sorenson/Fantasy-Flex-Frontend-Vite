// Handles ALL of the league selection aspect => Shows all leagues and then handles the collection of leagues ID's when getting checked off ==> Maps through all those selected leagues and get all the users in each ==> maps through that to get the user's specific leagues and rosters

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataContext  from '../../context/SleeperDataContext';
// import useAuth from '../../hooks/useAuth';

function SelectLeagues({ onLeaguesImported }) {
  
  const {userData ,leagueData, setLeagueData} = useContext(DataContext);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeagues, setSelectedLeagues] = useState([]);
  const navigate = useNavigate();
  // const {token} = useAuth();

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
  }, [userId]);

 

  const handleCheckboxChange = (event, leagueId) => {
    const checkedLeagues = leagues.map((league) => {
      if (league.league_id === leagueId) {
        return { ...league, selected: event.target.checked };  
      } else {
        return league;
      }
    });
    setLeagueData(checkedLeagues)
    setLeagues(checkedLeagues);
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


   //* ======================================== **//

// import React, { useState, useEffect } from 'react';
// import DataContext from '../../context/SleeperDataContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

export const ImportLeagues = ({onImportLeagues}) => {
  
  const { userData, leagueData, setLeagueData } = useContext(DataContext)
  const [leagues, setLeagues] = useState([])
  // const [selectedLeagues, setSelectedLeagues] = useState([])
  
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
  }, [userId]);

  const handleCheckboxChange = (event)=> {
    const leagueId = leagueData.league_id // leagueId === value of the checkbox(league_id)
    if (event.target.checked) {
      setLeagueData([...leagueData, leagueId]) // if checkbox is checked (true) => leagueData is updated to ALL the selected leagues
    } else {
      setLeagueData(leagueData.filter(id => id !== leagueId));
    }
  }
 
  const handleImportLeagues = ()=> {
    onImportLeagues(leagueData);
    navigate('/'); // Navigate back to homepage
  }
  
  return (
    <>
      <div>
      <h2>Select Leagues to Import</h2>
      <Form>
        {leagues.map((league) => (
          <Form.Check
            key={league.league_id}
            type="checkbox"
            id={league.league_id}
            label={league.name}
            value={league.league_id}
            checked={leagueData.includes(league.league_id)}
            onChange={handleCheckboxChange}
          />
        ))}
        <Button variant="primary" onClick={handleImportLeagues}>
          Import Leagues
        </Button>
      </Form>
    </div>
    </>
  )
}

