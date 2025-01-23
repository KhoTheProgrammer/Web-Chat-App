import React from "react";
import Sidebar from "./Sidebar"
import Message from "./Message";
import Conversation from "./Conversation";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar></Sidebar>
      <Message></Message>
      <Conversation></Conversation>
    </div>
  );
};

export default Home;
