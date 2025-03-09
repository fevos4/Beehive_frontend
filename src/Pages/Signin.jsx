import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); 
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      setError("Please fill out both fields.");
      return;
    }

    setIsLoading(true);
    setError(""); 

   
    setTimeout(() => {
      setIsLoading(false);
      if (isSignIn) {
       
        navigate("/dashboard");
      } else {
        
        navigate("/active");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-gray-100 shadow-lg rounded-lg flex w-full md:max-w-4xl md:h-[450px] h-[300px] max-w-2xl overflow-hidden">
        {/* Image with Blurred Background */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
          initial={false}
          animate={{
            x: isSignIn ? "0%" : "100%",
          }}
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
          animate={{
            x: isSignIn ? "0%" : "-100%",
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="md:text-2xl text-xl font-bold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 md:text-sm text-xs mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block md:text-sm text-xs font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
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
            <button
              type="submit"
              className="w-full py-2 md:text-sm text-xs bg-[#F28C28]  hover:bg-orange-300 text-black rounded-md"
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
