import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
//         <Outlet /> {/* Renders the current route's component */}
//       </main>
//       <Footer />
//     </div>
//   );
// };
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};


export default Layout;
