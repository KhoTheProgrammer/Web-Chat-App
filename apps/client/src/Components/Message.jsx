import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import kho from "../Assets/Man KHO  20220827_190121.jpg";
import vai from "../Assets/265984277566_status_91530703105144c3a7037a3d2e44f89a.jpg";
import masten from "../Assets/MLONGO PADYERA 20220410_174157.jpg";
import chiso from "../Assets/265993875181_status_5382410bf31943a0bc91142dc5c5829c.jpg";
import moreen from "../Assets/265994601921_status_d186370d2ab64c32a5150d41f4123fe8.jpg";
import dad from "../Assets/265997545934_status_07c3608b1687476d8bdb3985faaafc62.jpg";

const Message = () => {
  const people = [
    {
      name: "Kondwani Padyera",
      message: "Keep it up bro🔥🔥🔥",
      image: kho,
      time: "12m",
    },
    {
      name: "Violet Mwale",
      message: "Hey, Whatsapp",
      image: vai,
      time: "15m",
    },
    {
      name: "Chisomo Padyera",
      message: "Keep it up bro🔥🔥🔥",
      image: chiso,
      time: "45m",
    },
    {
      name: "Moreen Padyera",
      message: "Are you free on sunday?",
      image: moreen,
      time: "1h",
    },
    {
      name: "Stanley Padyera",
      message: "Can we meet at 7pm?",
      image: dad,
      time: "1h 25m",
    },
    {
      name: "Lyness Mkandawire",
      message: "You have to pay the money before friday",
      image: masten,
      time: "7h 37m",
    },
    {
      name: "Kondwani Padyera",
      message: "Keep it up bro🔥🔥🔥",
      image: kho,
      time: "12m",
    },
    {
      name: "Violet Mwale",
      message: "Hey, Whatsapp",
      image: vai,
      time: "15m",
    },
    {
      name: "Chisomo Padyera",
      message: "Keep it up bro🔥🔥🔥",
      image: chiso,
      time: "45m",
    },
    {
      name: "Moreen Padyera",
      message: "Are you free on sunday?",
      image: moreen,
      time: "1h",
    },
   
  ];
  return (
    <div className="w-[45%] p-2 border-r-2 font-mono space-y-4">
      <div className="flex justify-between border-b-2 pb-4">
        <p className=" font-bold text-2xl">Messages</p>
        <IoIosAddCircle size={36} color="#615ef0" />
      </div>

      <input
        type="text"
        name=""
        id=""
        placeholder="Search messages"
        className="w-full bg-[#f3f3f3] h-12 rounded-lg text-center"
      />

      {people.map((person, index) => (
        <div
          className={
            index === 0 ? "flex cursor-pointer bg-[#f3f3f3] p-2 rounded-md" : "flex cursor-pointer"
          }
        >
          <img src={person.image} alt="" className="w-12 h-12 rounded-md" />
          <div className="px-4">
            <p>{person.name}</p>
            <p className="text-[#a3a3a3]">{person.message}</p>
          </div>
          <p className="text-[#a3a3a3] ml-auto px-2 py-1">{person.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;
