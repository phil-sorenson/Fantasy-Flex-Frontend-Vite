import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css"

// 'root' element configuration -- standard React
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// 'root' element configuration -- vite 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
    
  </React.StrictMode>,
)