"use client";
import Link from "next/link";
import "./SidBar.scss";
import { BsCreditCardFill } from "react-icons/bs";
import { LiaStoreAltSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import {
  MdAccountBox,
  MdOutlinePsychology,
  MdOutlineSettingsSystemDaydream,
} from "react-icons/md";
import { BiExit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCount } from "@/redux/feature/showside";
import { useState } from "react";
import { PiUserSquareBold } from "react-icons/pi";

function Sidebar() {
  const count = useSelector(selectCount);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <aside
      className={` text-sm pt-6  
      ${count ? "flex bslg:hidden" : "hidden bslg:flex"}`}
    >
      <ul className="w-full flex flex-col mx-5">
        <div>
          <div>
            <Link href="/">
              <li
                className={selectedItem === 0 ? "selected" : ""}
                onClick={() => handleItemClick(0)}
              >
                <div>
                  <LuLayoutDashboard className="icon" />
                </div>
                <span>Dashboard</span>
              </li>
            </Link>
          </div>
          <p className="title">LISTS</p>
          <div>
            <Link href="/users" style={{ textDecoration: "none" }}>
              <li
                className={selectedItem === 1 ? "selected" : ""}
                onClick={() => handleItemClick(1)}
              >
                <div>
                  <PiUserSquareBold className="icon" />
                </div>
                <span>Users</span>
              </li>
            </Link>

            <Link href="/products" style={{ textDecoration: "none" }}>
              <li
                className={selectedItem === 2 ? "selected" : ""}
                onClick={() => handleItemClick(2)}
              >
                <div>
                  <LiaStoreAltSolid className="icon" />
                </div>
                <span>Products</span>
              </li>
            </Link>
            <Link href="/orders">
              <li
                className={selectedItem === 3 ? "selected" : ""}
                onClick={() => handleItemClick(3)}
              >
                <div>
                  <BsCreditCardFill className="icon" />
                </div>
                <span>Orders</span>
              </li>
            </Link>
          </div>

          <div>
            <Link href="/health">
              <li
                className={selectedItem === 7 ? "selected" : ""}
                onClick={() => handleItemClick(7)}
              >
                <div>
                  <MdOutlineSettingsSystemDaydream className="icon" />
                </div>
                <span>System Health</span>
              </li>
            </Link>
            <Link href="#">
              <li
                className={selectedItem === 8 ? "selected" : ""}
                onClick={() => handleItemClick(8)}
              >
                <div>
                  <MdOutlinePsychology className="icon" />
                </div>
                <span>Logs</span>
              </li>
            </Link>
            
          </div>

          <p className="title">USER</p>
          <div>
          <Link href="/">
              <li
                className={selectedItem === 9 ? "selected" : ""}
                onClick={() => handleItemClick(9)}
              >
                <div>
                  <TbSettingsCog className="icon" />
                </div>
                <span>Settings</span>
              </li>
            </Link>
            <Link href="/">
              <li
                className={selectedItem === 10 ? "selected" : ""}
                onClick={() => handleItemClick(10)}
              >
                <div>
                  <MdAccountBox className="icon" />
                </div>
                <span>Profile</span>
              </li>
            </Link>
            <Link href="/">
              <li
                className={selectedItem === 11 ? "selected" : ""}
                onClick={() => handleItemClick(11)}
              >
                <div>
                  <BiExit className="icon" />
                </div>
                <span>Logout</span>
              </li>
            </Link>
          </div>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
