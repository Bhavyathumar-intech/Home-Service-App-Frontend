 import { useState } from "react";
 import { Link } from "react-router-dom";
import { 
  Menu, X, PlusCircle, Edit, Trash2, Eye, 
  History, CreditCard, User, Briefcase
} from "lucide-react"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      {/* Sidebar Toggle Button */}
      <button 
        className="p-3 focus:outline-none text-white hover:bg-gray-800 w-full flex justify-end" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Profile Section */}
      <div className="flex items-center p-4">
        <User size={32} />
        {isOpen && <span className="ml-3 text-lg font-semibold">User Profile</span>}
      </div>
      <Link to="/profile" className="flex items-center p-3 hover:bg-gray-700 transition">
        <User size={20} />
        <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Profile</span>
      </Link>

      {/* Services Section */}
      <nav className="mt-4">
        <h2 className={`text-sm uppercase text-gray-400 px-4 ${!isOpen ? "hidden" : ""}`}>Services</h2>
        <ul className="mt-2">
          <li>
            <Link to="/add-service" className="flex items-center p-3 hover:bg-gray-700 transition">
              <PlusCircle size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Add New Service</span>
            </Link>
          </li>
          <li>
            <Link to="/update-service" className="flex items-center p-3 hover:bg-gray-700 transition">
              <Edit size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Update Service</span>
            </Link>
          </li>
          <li>
            <Link to="/delete-service" className="flex items-center p-3 hover:bg-gray-700 transition">
              <Trash2 size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Delete Service</span>
            </Link>
          </li>
          <li>
            <Link to="/view-services" className="flex items-center p-3 hover:bg-gray-700 transition">
              <Eye size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>View All Services</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Provider Details Section */}
      <nav className="mt-6">
        <h2 className={`text-sm uppercase text-gray-400 px-4 ${!isOpen ? "hidden" : ""}`}>Providers</h2>
        <ul className="mt-2">
          <li>
            <Link to="/provider-details/register" className="flex items-center p-3 hover:bg-gray-700 transition">
              <Briefcase size={20} /> 
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Provider Details</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* History Section */}
      <nav className="mt-6">
        <h2 className={`text-sm uppercase text-gray-400 px-4 ${!isOpen ? "hidden" : ""}`}>History</h2>
        <ul className="mt-2">
          <li>
            <Link to="/service-history" className="flex items-center p-3 hover:bg-gray-700 transition">
              <History size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Service History</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Payment Section */}
      <nav className="mt-6">
        <h2 className={`text-sm uppercase text-gray-400 px-4 ${!isOpen ? "hidden" : ""}`}>Payments</h2>
        <ul className="mt-2">
          <li>
            <Link to="/payment" className="flex items-center p-3 hover:bg-gray-700 transition">
              <CreditCard size={20} />
              <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Payment</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// export default Sidebar;
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`h-screen bg-gray-900 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"} fixed top-0 left-0`}>
//       <button 
//         className="p-3 focus:outline-none text-white hover:bg-gray-800 w-full flex justify-end" 
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       <div className="flex flex-col h-full">
//         {/* Sidebar Items */}
//         <nav className="flex-grow">
//           <ul className="space-y-2">
//             <li>
//               <Link to="/add-service" className="flex items-center p-3 hover:bg-gray-700 transition">
//                 <PlusCircle size={20} />
//                 <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>Add Service</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/view-services" className="flex items-center p-3 hover:bg-gray-700 transition">
//                 <Eye size={20} />
//                 <span className={`ml-3 ${!isOpen ? "hidden" : ""}`}>View Services</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };
export default Sidebar;