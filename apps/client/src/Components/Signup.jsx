import React, { useState } from "react";

const Signup = () => {
  // data from user in the signup form
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // handle provided data by the user
  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlefname = (e) => {
    setfname(e.target.value);
  };

  const handlelname = (e) => {
    setlname(e.target.value);
  };

  const handleusername = (e) => {
    setusername(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  // test if it works
  const signupdata = {
    email: email,
    firstname: fname,
    lastname: lname,
    username: username,
    password: password,
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: "Content-Type: application/json",
      body: JSON.stringify(signupdata),

    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form
        className="w-96 p-8 bg-white rounded-lg shadow-lg space-y-4"
        onSubmit={handlesubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            onChange={handleemail}
          />
        </div>

        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstname"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            required
            onChange={handlefname}
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            required
            onChange={handlelname}
          />
        </div>

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
            placeholder="Choose a username"
            required
            onChange={handleusername}
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
            placeholder="Choose a password"
            required
            onChange={handlepassword}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-[#615ef0] text-white rounded-md shadow-lg hover:bg-[#4d51d6] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
