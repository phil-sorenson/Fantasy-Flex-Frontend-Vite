// General Imports
import React from "react";
import { Routes, Route, Switch, useParams } from "react-router-dom";
import "./App.css";
import { KEY } from "./localKey";
import { APP_ID } from "./localKey";

// Pages Imports
import LoginPage from "./pages/ReactLoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import SelectPlatform from './components/PlatformSelectionPage';
import SleeperLogin from './pages/SyncPlatformPage/Sleeper/SleeperLogin';
import SelectLeagues from './pages/SelectLeaguesPage';


// Component Imports
import Navbar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import SideBar from './components/SideBarNav';


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import useAuth from "./hooks/useAuth";
import SyncSleeper from "./pages/SyncPlatformPage/Sleeper/SyncSleeper";

// export const BASE_URL = `https://api.sleeper.app/v1/`;
// export const DB_URL = `http://127.0.0.1:8000/api/sleeper/`;

function App() {
  

  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='select-platform' element={<SelectPlatform/>}/>
          <Route path='sync-platform' element={<SyncSleeper/>}/>
          <Route path='select-platform' element={<SelectPlatform/>}/>

        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;



        // <SideBar />
        // <Switch>
        //   <Route exact path='/' component={HomePage} />
        //   <Route path='/platform-selection' component={PlatformSelection} />
        //   <Route path='/sync' component={SyncPage} />
        //   <Route path='/select-league' component={LeagueSelection} />
        //   <Route path='/team-information' component={TeamInformation} />
        // </Switch>