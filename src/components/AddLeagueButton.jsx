// Navigates to the SelectPlatfornmPage onClick
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { user, token } from "../hooks/useAuth"
import { Link } from 'react-router-dom';

const AddLeagueButton = () => {
  // const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const {user, token } = useAuth()

  const handleAddLeague = () => {
    navigate('/platform-selection');
  };

  return (
    <div>
      {token ? (
        <button onClick={handleAddLeague}>Add A League</button>
      ) : (
        <p>Please log in to add a league.</p>
      )}
    </div>
  );
};

export default AddLeagueButton;