import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [error, seterror] = useState();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleusername = (e) => {
    setusername(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const loginbody = {
    username: username,
    password: password,
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginbody),
      });
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      // users data
      const data = response.json();
      console.log(data);
      navigate("/home");
    } catch (err) {
      seterror(err.message);
      setTimeout(() => {
        seterror("");
      }, 2000);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 font-mono">
      <form
        className="w-96 p-8 bg-white rounded-lg shadow-lg space-y-4"
        onSubmit={handlesubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div>
          <label htmlFor="username" className="">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            onChange={handleusername}
          />
        </div>
        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            onChange={handlepassword}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-[#615ef0] text-white rounded-md shadow-lg hover:bg-[#4d51d6] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className=" font-semibold">
          Need an account?{" "}
          <span className=" text-[#615ef0]">
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        </p>
        {error && <p className=" text-center w-full text-red-700">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
