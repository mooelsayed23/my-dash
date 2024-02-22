"use client";
import React, { useEffect, useState } from "react";
import Notificatons from "../Notificatons";
import Massege from "../Massege";
import { BsMoonStars } from "react-icons/bs";
import {  PiSunHorizonBold } from "react-icons/pi";

const Darkmode = () => {
  const [uMode, setUMode] = useState(false);

  useEffect(() => {
    const userMode = window.localStorage.getItem("darkmode") === "true";
    setUMode(userMode);
    if (userMode) {
      document.body.classList.add("darkmode");
    }
  }, []);

  const toggleMode = () => {
    const newUserMode = !uMode;
    setUMode(newUserMode);
    if (newUserMode) {
      document.body.classList.add("darkmode");
      window.localStorage.setItem("darkmode", "true");
    } else {
      document.body.classList.remove("darkmode");
      window.localStorage.setItem("darkmode", "false");
    }
  };

  return (
    <>
      <section className="items flex section items-center justify-center flex-grow space-x-10 lg:space-x-20 xl:space-x-32 2xl:space-x-50">
        <button className="item relative">
          {uMode ? (
            <PiSunHorizonBold
              className="icon   size-6 border-b-white text-white"
              onClick={toggleMode}
            />
          ) : (
            <BsMoonStars
              className="icon   size-6 border-b-[#65676b] "
              onClick={toggleMode}
            />
          )}
        </button>
        <Massege />
        <Notificatons />
      </section>
    </>
  );
};

export default Darkmode;
