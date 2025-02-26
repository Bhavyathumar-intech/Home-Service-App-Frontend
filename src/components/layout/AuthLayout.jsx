import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center mb-8">
              <svg
                className="h-10 w-10 text-indigo-600"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6333L29.3167 10.9833L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-gray-900">
                Curial
              </span>
            </div>
          </Link>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>

          {/* Auth Form */}
          {children}
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/workspace.jpg')" }}
      >
        <div className="h-full w-full bg-black bg-opacity-20 flex items-center justify-center">
          <div className="px-12 py-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Streamlined Workspace</h3>
            <p className="text-lg">
              Access your digital environment from anywhere with our secure
              authentication system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
