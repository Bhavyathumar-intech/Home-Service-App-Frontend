// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="bg-white">
//       {/* Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex-shrink-0 flex items-center">
//             <svg
//               className="h-8 w-8 text-indigo-600"
//               viewBox="0 0 40 40"
//               fill="currentColor"
//             >
//               <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6333L29.3167 10.9833L31.6667 13.3333L16.6667 28.3333Z" />
//             </svg>
//             <span className="ml-2 text-xl font-bold text-gray-900">Home Service App </span>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/login"
//                 className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main>
//         <div className="relative">
//           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
//           <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//             <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
//               <div className="absolute inset-0">
//                 <img
//                   className="h-full w-full object-cover"
//                   src="/assets/images/workspace.jpg"
//                   alt="Workspace with laptop"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"></div>
//               </div>
//               <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
//                 <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//                   <span className="block text-white">Home Service App</span>
//                   <span className="block text-indigo-200">
//                     One Stop for All Services
//                   </span>
//                 </h1>
//                 <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
//                   Try it By your self
//                 </p>
//                 <div className="mt-10  max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
//                   <div className="space-y-4 sm:space-y-0 sm:mx-auto  sm:gap-5">
//                     <Link
//                       to="/login"
//                       className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
//                     >
//                       Get started
//                     </Link>
//                     {/* <Link
//                       to="/login"
//                       className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
//                     >
//                       Sign in
//                     </Link> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/workspace.jpg"
                  alt="Workspace with laptop"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"></div>
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Home Service App</span>
                  <span className="block text-indigo-200">
                    One Stop for All Services
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Try it By your self
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5">
                    <Link
                      to="/login"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
