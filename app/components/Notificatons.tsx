"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { MdNotificationsNone } from "react-icons/md";

const Notificatons = () => {
  const usersData = [
    {
      name: "Joseph Mcfall",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80",
      description: " started following you.",
      time: "1 min",
    },
    {
      name: "Sara Salah",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      description: " replied on the article.",
      time: "2 min",
    },
    {
      name: "Slick Net",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: " replied on the article.",
      time: "4 min",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      description: " Test with TDD.",
      time: "5 min",
    },
  ];

  const [show, setShow] = useState(false);
  const [vall, setvall] = useState(true);
  const [count, setCount] = useState(0);
  const hnafit = () => {
    setShow(!show);
    setvall(false);
    setCount(1);
  };

  return (
    <>
      <div className={`item relative flex items-center `}>
        <button type="button" onClick={hnafit} className="flex items-center">
          <MdNotificationsNone className="icon size-7 text-black" />
          {show === false && count === 0 && (
            <div
              className="counter absolute top-[-7px] right-[-12px]
           bg-blue-500 text-white text-sm rounded-full size-[19px] flex justify-center items-center"
            >
              1
            </div>
          )}
        </button>

        <button
          onClick={hnafit}
          className={
            show
              ? "fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-10"
              : ""
          }
        ></button>
        <div>
          <ul
            className={`mt-8 shadow-xl border bg-gray-50 md:pt-2 min-h-96 ${
              show
                ? "natifgation px-1 block z-20 rounded space-y-4 list-none absolute                                       -right-14 sm:right-0 min-w-64 xs:min-w-72 sm:min-w-80 md:min-w-96 max-h-[500px]                                 bg-white text-slate-800 "
                : "hidden"
            }
          ${vall || count === 1 ? "overflow-y-auto" : "overflow-y-hidden"}`}
          >
            <div className=" pb-1 flex justify-between items-center mt-2 mb-3">
              <p className="w-5/6 text-xl mx-auto ms-1 ">Notificatons</p>
              <div className="w-1/6 text-xl flex justify-end pr-2 cursor-pointer">
                <RxDotsHorizontal />
              </div>
            </div>
            {usersData.map((user, index) => (
              <li
                key={index}
                className="w-full hover:bg-gray-200 cursor-pointer py-1
                 flex items-center text-black flex-nowrap "
              >
                <a href="/" className="flex-shrink-0 w-1/6 self-center">
                  <Image
                    className="rounded-full w-11 h-11 mx-auto "
                    src={user.image}
                    alt={`${user.name} image`}
                    width={100}
                    height={100}
                  />
                </a>
                <span className="mx-1 text-gray-500 text-sm w-4/6 whitespace-nowrap text-nowrap overflow-hidden text-ellipsis">
                  <a href="/" className="font-semibold text-gray-900">
                    {user.name}
                  </a>{" "}
                  and 5 others {" "}
                  <p
                    className=" "
                    title={user.description}
                  >
                    {user.description}
                  </p>
                </span>
                <span className="h-1/6 text-sm text-slate-400 self-end text-right pr-2 grow text-nowrap">
                  {index + 1 + " min"}
                </span>
              </li>
            ))}
            <li className="absolute bottom-0 w-full left-0 py-1 bg-gray-50 text-center cursor-not-allowed text-gray-400 font-semibold">
              Show All
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notificatons;
