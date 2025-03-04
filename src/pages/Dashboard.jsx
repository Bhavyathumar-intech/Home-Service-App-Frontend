import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authService } from "../services/api"; // Ensure authService has getCurrentUser()

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authService.getCurrentUser();
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        if (error.response?.status === 401) {
          handleLogout(); // Auto logout if unauthorized
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    try {
      // ✅ Remove token from Cookies
      Cookies.remove("authToken", { path: "/" });

      // ✅ Clear localStorage
      localStorage.removeItem("user");

      // ✅ Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Dashboard Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-6">
            <h2 className="text-xl font-semibold">Welcome, {user?.fullName || "User"}!</h2>
            <p className="mt-2 text-gray-600">This is your dashboard. Content will be shown here.</p>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
