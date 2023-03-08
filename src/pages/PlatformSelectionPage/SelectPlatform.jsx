// ToDo: Make the sleeper button the Sleeper logo
// ToDo: Make sure the navigate is working

import React from "react";
import { useNavigate } from "react-router-dom";

const PlatformSelection = () => {
  const navigate = useNavigate();

  const handlePlatformSelection = (platform) => {
    navigate(`/sync?platform=${platform}`);
  };

  return (
    <div>
      <h2>SELECT A PLATFORM</h2>
      <button onClick={() => handlePlatformSelection('sleeper')}>
        Sleeper
      </button>
    </div>
  );
};

export default PlatformSelection;