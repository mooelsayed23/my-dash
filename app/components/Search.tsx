"use client";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggle as toggleShowDash } from "../../redux/feature/showDashSlice";
interface SearchProps {
  id: string;
}
const Search: React.FC<SearchProps> = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleToggleShowDash = () => {
    dispatch(toggleShowDash());
    setShow(!show);
  };
  return (
    <>
      <input
        id={id}
        type="text"
        placeholder="Search..."
        className={`border-0 outline-0 rounded-s-md py-2 bg-transparent bg-slate-300  ms-3 xs:flex ${
          show ? "flex justify-end" : "hidden"
        }`}
      />
      <div
        className="  items-center border-0 outline-0  rounded-e-md p-3"
        onClick={handleToggleShowDash}
      >
        <BiSearchAlt2 className="  rounded-e-md text-slate-600 " />
      </div>
    </>
  );
};

export default Search;
