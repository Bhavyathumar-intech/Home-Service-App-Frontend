// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/layout/Header";  // Import Header
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Contact from "./pages/ContactUs";
// import Footer from "./components/layout/Footer";
// import AboutUs from "./pages/Aboutus";

// const App = () => {
//   // Simple auth check
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
//       <Header /> {/* Render Header here */}
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
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//       <Footer /> {/* Render Footer here */}
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";  // ✅ Import Cookies
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/ContactUs";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/Aboutus";

const App = () => {
  // ✅ Check JWT token in Cookies instead of localStorage
  const isAuthenticated = () => {
    return Cookies.get("authToken") !== undefined;  // ✅ Read from cookies
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
      <Header />
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
