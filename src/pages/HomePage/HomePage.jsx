//* This is where I will Route the Platform selector form, The User component

import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  const [user, token] = useAuth();
  const [] = useState([]);

  return (
    <div>
      <b>
        <h2>Welcome To</h2>
      </b>
      <br />
      <b>
        <h2>Fantasy🏈Flex!</h2>
        <h4>
          Manage ALL Your Fantasy Football Leagues in one place...regardless of
          league type!
        </h4>
      </b>
    </div>
  );
};

export default HomePage;
