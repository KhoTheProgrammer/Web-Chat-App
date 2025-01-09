import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form className="w-96 p-8 bg-white rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-[#615ef0] text-white rounded-md shadow-lg hover:bg-[#4d51d6] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
