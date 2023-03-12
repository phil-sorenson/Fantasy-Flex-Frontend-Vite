// 
import React, { createContext, useState } from 'react';

export const  DataContext = createContext();

export const DataContextProvider = ({children}) => {
  
  const [userData, setUserData] = useState(null);
  const [leagueData, setLeagueData] = useState(null);

  return (
    <DataContext.Provider value={{ userData, setUserData, leagueData, setLeagueData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

// import React, { createContext, useState } from "react";


// export const SleeperContext = createContext();


// export const UserContextProvider = ({ children }) => {
//   // const userData = localStorage.getItem({
//   //   username: 'username',
//   //   userId: 'user_id',
//   //   displayName: 'display_name',
//   //   avatar: 'avatar'
//   // })
//   // const [data, setData] = useState(userData);
//   const [sleeperData, setSleeperData] = useState({
//     username: 'username',
//     user_id: 'user_id',
//     display_name: 'display_name',
//     avatar: 'avatar'
//   })



//   return (
//     <UserContext.Provider value={{ sleeperData, setSleeperData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;
