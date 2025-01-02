import React from "react";
import kho from "../Assets/Man KHO  20220827_190121.jpg";
import { FaCircle } from "react-icons/fa";
import moreen from "../Assets/265984277566_status_91530703105144c3a7037a3d2e44f89a.jpg"

const Conversation = () => {
  return (
    <div className="p-4 font-mono w-[50%] h-screen flex flex-col space-y-4">
      {/* User Info */}
      <div className="flex items-center justify-start border-b-2 pb-4 mb-4">
        <img src={kho} alt="User Avatar" className="w-12 h-12 rounded-full" />
        <div className="px-4">
          <p className="font-bold text-xl">Kondwani Padyera</p>
          <div className="flex items-center">
            <FaCircle size={10} color="lightgreen" className="my-2" />
            <p className="pl-2 text-gray-500">Online</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Receiver's message (left aligned) */}
        <div className="flex items-start">
          <img
            src={kho}
            alt="Receiver Avatar"
            className="w-8 h-8 rounded-full"
          />
          <p className="bg-[#f3f3f3] p-2 ml-4 rounded-lg max-w-[70%]">
            Hie, how are you doing today?
          </p>
        </div>

        {/* Sender's message (right aligned) */}
        <div className="flex items-start justify-end">
          <p className="bg-[#615ef0] text-white p-2 mr-4 rounded-lg max-w-[70%]">
            I'm good, thanks! How about you?
          </p>
          <img src={moreen} alt="Sender Avatar" className="w-8 h-8 rounded-full" />
        </div>

        {/* Receiver's message */}
        <div className="flex items-start">
          <img
            src={kho}
            alt="Receiver Avatar"
            className="w-8 h-8 rounded-full"
          />
          <p className="bg-[#f3f3f3] p-2 ml-4 rounded-lg max-w-[70%]">
            I'm doing great as well! Any plans for the day?
          </p>
        </div>

        {/* Sender's message */}
        <div className="flex items-start justify-end">
          <p className="bg-[#615ef0] text-white p-2 mr-4 rounded-lg max-w-[70%]">
            Yes, planning to work on some projects later.
          </p>
          <img src={moreen} alt="Sender Avatar" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      {/* Input Box */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
        />
        <button className="ml-2 bg-[#615ef0] text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Conversation;
