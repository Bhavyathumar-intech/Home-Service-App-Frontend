import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "User", // Default role
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const roleColors = {
    User: "bg-blue-100",
    ServiceProvider: "bg-green-100",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await axios.post("https://your-api.com/auth/login", formData);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      setErrors({
        form: error.response?.data?.message || "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg ${roleColors[formData.role] || "bg-white"}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.form && (
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p>{errors.form}</p>
          </div>
        )}

        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div>
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="User">User</option>
            <option value="ServiceProvider">Service Provider</option>
          </select>
        </div>

        <Button type="submit" fullWidth isLoading={isLoading}>
          Sign in
        </Button>
      </form>
      <div className="text-center mt-2">
        <p className="text-sm text-gray-600">
          Not Registerd?{" "}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register Now 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
