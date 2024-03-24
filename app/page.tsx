"use client";
import "./main.scss";

import Widget from "./components/widget/Widget";
import Featured from "./components/featured/Featured";
import Charbar from "./components/chart/Chartbar";
import CollapsibleTable from "./components/table/Table";
import { MdDashboard } from "react-icons/md";
export default function Home() {
  return (
    <main className=" bg-gray-100 grow px-2 xs:px-5 sm:px-10">
      <p className=" sm:my-4 lg:my-5 text-3xl flex items-center font-black"><MdDashboard/>DashBoard</p>
      {/* Widget */}
      <div className="">
        <div className="grow flex flex-wrap gap-5 mb-5">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="flex flex-wrap grow gap-5">
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
      {/* Featured Charbar */}
      <div className="flex flex-wrap gap-3 mt-10">
        <Charbar />
        <Featured />
      </div>
      <div className="mt-10 overflow-x-hidden max-w-full mb-10">
        <CollapsibleTable />
      </div>
    </main>
  );
}
