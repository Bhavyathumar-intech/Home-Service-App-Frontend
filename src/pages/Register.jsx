import React from "react";
import AuthLayout from "../components/layout/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your 14-day free trial today."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
