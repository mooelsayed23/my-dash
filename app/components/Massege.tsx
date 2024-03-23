"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdChatBubbleOutline } from "react-icons/md";
const messagesData = [
  {
    sender: "Samer",
    image: "https://readymadeui.com/profile_2.webp",
    content:
      "Hello there, check this new items in from the your may interested from the motion school",
    time: "10 minutes ago",
  },
  {
    sender: "Haper",
    image: "https://readymadeui.com/profile_3.webp",
    content:
      "Hello there, check this new items in from the your may interested from the motion school",
    time: "2 hours ago",
  },
  {
    sender: "San",
    image: "https://readymadeui.com/profile_4.webp",
    content:
      "Hello there, check this new items in from the your may interested from the motion school",
    time: "1 day ago",
  },
  {
    sender: "Seeba",
    image: "https://readymadeui.com/profile_5.webp",
    content:
      "Hello there, check this new items in from the your may interested from the motion school",
    time: "30 minutes ago",
  },
];

const Massege = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" relative flex items-center">
      <button onClick={() => setshow(!show)} className="item relative">
        <MdChatBubbleOutline className="icon size-7 text-slate-600" />
      </button>
      <button
        onClick={() => setshow(false)}
        className={
          show
            ? "fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-10 "
            : ""
        }
      ></button>
      <div className="">
        <div
          className={`massege mr-2 pt-0 absolute shadow-lg bg-white  z-20 mt-8 rounded-lg 
        -right-[120px] sm:right-0 min-w-64 xs:min-w-72 sm:min-w-80 md:min-w-96 max-h-[500px] overflow-auto ${
          show ? "block absolute right-0" : "hidden"
        }`}
        >
          <div className="flex items-center justify-between  px-4 sticky top-0 bg-white shadow py-3">
            <b className="text-xs text-blue-500 cursor-pointer hover:text-green-400">
              new massege
            </b>
            <i
              className="text-xs text-blue-500 cursor-pointer hover:text-green-400"
              onClick={() => setshow(!show)}
            >
              Mark as read
            </i>
          </div>
          <ul className="divide-y px-1">
            {messagesData.map((message, index) => (
              <li
                key={index}
                className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer"
              >
                <Image
                  src={message.image}
                  className="w-12 h-12 rounded-full shrink-0"
                  width={100}
                  height={100}
                  alt={`${message.sender} image`}
                />
                <div className="ml-6">
                  <h3 className="text-sm text-[#333] font-semibold">
                    new message from {message.sender}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">
                    {message.content}
                  </p>
                  <p className="text-xs text-blue-500 leading-3 mt-2">
                    {message.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <b className=" w-full bg-white shadow text-sm py-3 text-center font-bold hover:text-green-400  mb-0 inline-block text-blue-700 cursor-pointer">
            View all massege
          </b>
        </div>
      </div>
    </div>
  );
};

export default Massege;
