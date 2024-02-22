"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";

const Notificatons = () => {
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
      <div className={`item relative`}>
        <button type="button" onClick={hnafit}>
          <MdNotificationsNone className="icon size-6" />
          {show === false && count === 0 && (
            <div
              className="counter absolute top-[-13px] right-[-10px]
           bg-red-500 text-white rounded-full size-5 flex justify-center items-center"
            >
              1
            </div>
          )}
        </button>
        <button
          onClick={hnafit}
          className={
            show
              ? "fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-10 bg-black/30"
              : ""
          }
        ></button>
        <ul
          className={` ${
            show
              ? "natifgation block absolute -right-16 sm:right-0 z-20 rounded space-y-3 list-none min-w-64 sm:min-w-72 max-h-[500px] bg-white text-slate-800"
              : "hidden"
          }
          ${vall || count === 1 ? "overflow-y-auto" : "overflow-y-hidden"}`}
        >
          <li>
            <p className="block p-2 font-medium text-center  ">Notifications</p>
          </li>
          {/* //////////////////////////// */}
          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="/1.jpeg"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Joseph Mcfall
                </a>{" "}
                and <span className="font-medium text-gray-900 ">5 others</span>{" "}
                started following you.
                <span className="flex justify-end text-slate-500 text-xs  text-center">
                  1 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Sara Salah
                </a>{" "}
                and <span className="font-medium text-gray-900 ">5 others</span>{" "}
                replied on the artical.{" "}
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  2 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5 ">
                <a href="/" className="font-semibold text-gray-900 ">
                  Slick Net
                </a>{" "}
                and{" "}
                <span className="font-medium text-gray-900 ">12 others</span>{" "}
                replied on the artical.
                <span className="flex justify-end  text-slate-500 text-xs w-full">
                  2 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Jane Doe
                </a>{" "}
                and <span className="font-medium text-gray-900 ">2 others</span>{" "}
                Test with TDD.
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  4 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Abigail Bennett
                </a>{" "}
                and{" "}
                <span className="font-medium text-gray-900 ">17 others</span>{" "}
                Tstart following you.
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  6 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Sara Salah
                </a>{" "}
                and <span className="font-medium text-gray-900 ">5 others</span>{" "}
                replied on the artical.
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  7 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Slick Net
                </a>{" "}
                and{" "}
                <span className="font-medium text-gray-900 ">12 others</span>{" "}
                replied on the artical.
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  8 min
                </span>
              </span>
            </div>
          </li>

          <li className="text-black w-full hover:bg-gray-100">
            <div className="flex items-stert px-2 py-1 text-black flex-wrap justify-center">
              <a href="/" className="flex-shrink-0 w-1/5">
                <Image
                  className="rounded-full w-11 h-11"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="Joseph image"
                  width={100}
                  height={100}
                />
              </a>

              <span className="text-gray-500 text-sm mb-1.5 ps-2 w-4/5">
                <a href="/" className="font-semibold text-gray-900 ">
                  Jane Doe
                </a>{" "}
                and <span className="font-medium text-gray-900 ">2 others</span>{" "}
                Test with TDD.
                <span className="flex justify-end text-slate-500 text-xs w-full text-center">
                  10 min
                </span>
              </span>
            </div>
          </li>

          <li
            onClick={() => setvall(!vall)}
            className={`shadow bg-white text-slate-800 absolute bottom-0 w-full left-0 right-0 ${
              vall || count === 1 ? "hidden" : ""
            }`}
          >
            <a
              href="#"
              className="block  bottom-0 py-2 text-sm font-medium text-center "
            >
              <p className="inline-flex items-center ">View all</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Notificatons;
