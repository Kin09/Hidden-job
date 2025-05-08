import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Job Tracker</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
