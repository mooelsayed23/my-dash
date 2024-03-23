"use client";
import headstyles from "./header.module.scss";
import { TfiMenu } from "react-icons/tfi";
import Search from "../Search";
import { toggle } from "@/redux/feature/showside";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsVisible } from "@/redux/feature/showDashSlice";
import Darkmode from "../darkMode/Darkmode";
import Avatar from "../Avatar";

const Header = () => {
  const dispatch = useDispatch();

  const dashvisbilty = useSelector(selectIsVisible);
  return (
    <>
      <div
        className={`w-full top-header relative z-10  bg-white rounded-md sm:hidden flex items-center justify-between p-2 ${
          dashvisbilty ? "" : "w-full justify-center"
        } ${headstyles.topheader}`}
      >
        <p className={`${dashvisbilty ? "" : "hidden"} xs:flex w-6/12`}>
          Dashboard
        </p>
        <div
          className={`" border flex rounded-md justify-center" ${
            dashvisbilty ? "" : "w-full justify-end"
          }`}
        >
          <Search id="topsearch" />
        </div>
      </div>

      <header className={`w-full bg-white ${headstyles.header}`}>
        <div
          className={` flex justify-between w-11/12 mx-auto items-center`}
        >
          <div className="h-full flex items-center">
            <div
              className={`${headstyles.logo}  size-6 h-full `}
              onClick={() => dispatch(toggle())}
            >
              <TfiMenu className="icon size-6" />
            </div>
            <div className={`${headstyles.logo} hidden bslg:flex h-full `}>
              Dashboard
            </div>
          </div>

          <div className="flex justify-center items-center flex-grow">
            <div className="search border rounded-md justify-between items-center hidden sm:flex ms-7">
              <Search id="search" />
            </div>

            <Darkmode />
          </div>
          <Avatar />
        </div>
      </header>
    </>
  );
};

export default Header;
