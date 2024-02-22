"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdChatBubbleOutline } from "react-icons/md";

const Massege = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" relative">
      <button onClick={() => setshow(!show)} className="item relative">
        <MdChatBubbleOutline className="icon size-6" />
      </button>
      <button
        onClick={() => setshow(false)}
        className={
          show
            ? "fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-10 bg-black/30"
            : ""
        }
      ></button>
      <div
        className={`massege p-2 pt-0 absolute shadow-lg bg-white py-2 z-20 min-w-full rounded-lg -right-32 lg:right-0 w-64 sm:w-[410px] max-h-[500px] overflow-auto ${
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
        <ul className="divide-y">
          <li className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer">
            <Image
              src="https://readymadeui.com/profile_2.webp"
              className="w-12 h-12 rounded-full shrink-0"
              width={100}
              height={100}
              alt="Joseph image"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">
                new message from Samer
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Hello there, check this new items in from the your may
                interested from the motion school
              </p>
              <p className="text-xs text-blue-500 leading-3 mt-2">
                10 minutes ago
              </p>
            </div>
          </li>
          <li className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer">
            <Image
              src="https://readymadeui.com/profile_3.webp"
              className="w-12 h-12 rounded-full shrink-0"
              width={100}
              height={100}
              alt="Joseph image"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">
                new message from Haper
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Hello there, check this new items in from the your may
                interested from the motion school
              </p>
              <p className="text-xs text-blue-500 leading-3 mt-2">
                2 hours ago
              </p>
            </div>
          </li>
          <li className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer">
            <Image
              src="https://readymadeui.com/profile_4.webp"
              className="w-12 h-12 rounded-full shrink-0"
              width={100}
              height={100}
              alt="Joseph image"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">
                new message from San
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Hello there, check this new items in from the your may
                interested from the motion school
              </p>
              <p className="text-xs text-blue-500 leading-3 mt-2">1 day ago</p>
            </div>
          </li>
          <li className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer">
            <Image
              src="https://readymadeui.com/profile_5.webp"
              className="w-12 h-12 rounded-full shrink-0"
              width={100}
              height={100}
              alt="Joseph image"
            />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">
                new message from Seeba
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Hello there, check this new items in from the your may
                interested from the motion school
              </p>
              <p className="text-xs text-blue-500 leading-3 mt-2">
                30 minutes ago
              </p>
            </div>
          </li>
        </ul>
        <b className=" w-full bg-white shadow text-sm py-3 text-center font-bold hover:text-green-400  mb-0 inline-block text-blue-700 cursor-pointer">
          View all massege
        </b>
      </div>
    </div>
  );
};

export default Massege;
