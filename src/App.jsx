// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//   // Simple auth check - in a real app, this would check JWT tokens or session cookies
//   const isAuthenticated = () => {
//     return localStorage.getItem("authToken") !== null;
//   };

//   // Protected route component
//   const ProtectedRoute = ({ children }) => {
//     if (!isAuthenticated()) {
//       return <Navigate to="/login" />;
//     }
//     return children;
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";  // Import Header
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/layout/Footer";  // Import Footer

const App = () => {
  // Simple auth check
  const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Header /> {/* Render Header here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer /> {/* Render Footer here */}
    </Router>
  );
};

export default App;

