import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


 const SideBar = ({ jwt }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Fantasy League Sync</button>
            <div className="dropdown-content">
              <Link to="/sync-leagues">Sync Leagues</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
