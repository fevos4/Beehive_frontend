import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = isSignIn
    ? "http://127.0.0.1:8000/act_auth/token/"
    : "http://127.0.0.1:8000/register/";

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!username || !password || (!isSignIn && (!firstName || !lastName || !email || !confirmPassword))) {
        setError("Please fill out all fields.");
        return;
      }
    
      if (!isSignIn && password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    
      setIsLoading(true);
      setError("");
    
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            isSignIn
              ? { username, password }
              : { 
                  username, 
                  password, 
                  password_confirmation: confirmPassword,
                  first_name: firstName, 
                  last_name: lastName, 
                  email 
                }
          ),
        });
    
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server did not return JSON. Check if your backend URL is correct.");
        }
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(
            data.detail ||
            data.non_field_errors?.[0] ||
            Object.values(data)[0] ||
            "Authentication failed"
          );
        }
    
        if (isSignIn) {
          // Save token or do something else after login
          localStorage.setItem("token", data.access); // Save token to local storage
          console.log("Logged in successfully!", data);
          navigate("/hives"); // 🛠️ Redirect after login (you can adjust this)
        } else {
          console.log("Registered successfully!", data);
          setIsSignIn(true); // ✅ Switch to Sign In after successful registration
          navigate("/active"); // ✅ Redirect to /active page after registration
        }
    
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-gray-100 shadow-lg rounded-lg flex w-full md:max-w-4xl md:h-[650px] h-[300px] max-w-2xl overflow-hidden">
        
        {/* Image Section */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
          initial={false}
          animate={{ x: isSignIn ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/assets/ss.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover blur-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-8 font-montserrat">
            <h2 className="md:text-5xl text-3xl font-bold">
              {isSignIn ? "Welcome Back!" : "Welcome"}
            </h2>
            <p className="mt-4 md:text-sm text-xs font-bold">
              {isSignIn
                ? "Please log in to your account with the given details."
                : "Please create an account with the given details."}
            </p>
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="mt-6 px-6 py-2 md:text-sm text-xs font-bold border rounded-full bg-white text-black hover:bg-gray-200"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="absolute top-0 left-1/2 w-1/2 h-full flex flex-col justify-center p-8 bg-white font-montserrat"
          initial={false}
          animate={{ x: isSignIn ? "0%" : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="md:text-2xl text-xl font-bold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-500 md:text-sm text-xs mb-4">{error}</p>
            )}

            {!isSignIn && (
              <>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
              </>
            )}

            {isSignIn && (
              <>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block md:text-sm text-xs font-medium mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full md:px-4 md:py-2 px-2 py-1 text-xs border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 md:text-sm text-xs bg-[#F28C28] hover:bg-orange-300 text-black rounded-md"
            >
              {isLoading ? "Loading..." : isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
