// 
import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();
export default DataContext

export const DataContextProvider = ({children}) => {
  
  const [userData, setUserData] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  useEffect(()=> {
    const storedUserData=JSON.parse(localStorage.getItem('userData'));
    const storedLeagueData=JSON.parse(localStorage.getItem('leagueData'));

    if (storedUserData) {
      setUserData(storedUserData)
    }
    if (storedLeagueData) {
      setLeagueData(storedLeagueData)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('userData', JSON.stringify(userData))
  },[userData])
  
  useEffect(()=> {
    localStorage.setItem('leagueData', JSON.stringify(leagueData))
  },[leagueData])

  return (
    <DataContext.Provider value={{ userData, setUserData, leagueData, setLeagueData }}>
      {children}
    </DataContext.Provider>
  );
}



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
