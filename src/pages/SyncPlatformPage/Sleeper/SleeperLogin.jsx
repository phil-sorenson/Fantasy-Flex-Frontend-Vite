
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../../context/UserContext';
import { DataContext } from '../../../context/SleeperDataContext';
import useAuth from '../../../hooks/useAuth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SleeperLogin = () => {
  const {user, token} = useAuth()
  const [username, setUsername] = useState('');
  const {setUserData} = useContext(DataContext)
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
  const handleLogin = async () => {
      try {
        const response = await axios.get(
          `https://api.sleeper.app/v1/user/${username}`, {
            headers: {
              Authorization: "Bearer " + token } 
          });
      const sleeperUser = response.data;
      setUserData(sleeperUser);
      console.log('userData', sleeperUser)
      navigate('/select-league');
    } catch (error) {
      console.error(error);
      setError('Invalid username, Try Again.')
    }
  };


  return (
    
    <Form onSubmit={handleLogin}>
      <h2>Keep Track of your Sleeper Leagues!</h2>
      <h4>Enter your Sleeper Username to start Sync</h4>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Sleeper Username</Form.Label>
        <Form.Control size='sm' type="text" value={username} onChange={handleUsernameChange} placeholder="Sleeper Username" />
        <Form.Text className="text-muted">
          Must be Username -- Email will NOT work! 
        </Form.Text>
        {error && <p>error</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );



}

export default SleeperLogin;


  // return (
  //   <div>
  //     <h2>Keep track of your Sleeper Leagues!</h2>
  //     <h4>Enter Sleeper Username to Start Sync</h4>
  //     <form onSubmit={handleLogin}>
  //       <label>
  //         Sleeper Username:
  //         <input placeholder='Username' type="text" value={username} onChange={handleUsernameChange} />
  //       </label>
  //       <button type="submit">Start League Sync</button>
  //       <text>Email Address will NOT work -- must be Username</text>
  //       {error && <p>error</p>}
  //     </form>
  //   </div>
  // );