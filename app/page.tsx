"use client";
import "./main.scss";

import Widget from "./components/widget/Widget";
import Featured from "./components/featured/Featured";
import Charbar from "./components/chart/Chartbar";
import CollapsibleTable from "./components/table/Table";
import { MdDashboard } from "react-icons/md";
export default function Home() {
  return (
    <main className=" bg-gray-100 grow p-2 xs:p-5 sm:p-10">
      <p className="-mt-5 mb-5 text-3xl flex items-center font-black"><MdDashboard/>DashBoard</p>
      {/* Widget */}
      <div className="flex flex-wrap grow gap-3">
        <span className="grow flex flex-wrap gap-3">
          <Widget type="user" />
          <Widget type="order" />
        </span>
        <span className="flex flex-wrap grow gap-3">
          <Widget type="earning" />
          <Widget type="balance" />
        </span>
      </div>
      {/* Featured Charbar */}
      <div className="flex flex-wrap gap-3 mt-10">
        <Charbar />
        <Featured />
      </div>
      <div className="mt-10">
        <CollapsibleTable />
      </div>
    </main>
  );
}
