import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
// import 'bootstrap/dist/css/bootstrap.min.css';

// 'root' element configuration -- vite 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      </UserContextProvider>
    </Router>

  </React.StrictMode>,
)