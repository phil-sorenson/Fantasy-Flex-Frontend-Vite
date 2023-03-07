
// After successful login --> User routed to this page
  //? For application rough draft, get user Table will just go in the middle of page (i.e dynasty-daddy) -- Use Tabs for platforms
  // => I want my homepage.jsx to have platform buttons that once clicked, takes us to differnt page (SyncLeaguesPage)
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./HomePage.css"


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  const [user, token] = useAuth();
  const [] = useState([]);

  return (
    <div>
        <h2>Welcome to Fantasy🏈Flex {user.username}</h2>
        <h5>Step 1. Import your Fantasy Football leagues</h5>
        <h5>Step 2. Track ALL your teams in one place for free!</h5>
        <h5>Step 3. Flex on your competition and win some hardware!</h5>
    </div>
  );
};

  export default HomePage;
