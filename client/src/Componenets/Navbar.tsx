import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import styles from "../AllCss/Navbar.module.css";
import DropDown from "./DropDown";

import PersistentDrawerLeft from "./Hameburger";
import Popover from "./Popover";
type Navbarcss = {
  maincss: string;
};

const Navbar: React.FC<Navbarcss> = ({ maincss }) => {

  const [show, setShow] = useState<boolean>(false);
  
  return (
    <nav className="h-20 bg-white fixed top-0	 z-50 cursor-pointer w-[100%]">
      <ul className={maincss}>
        <li className="lg:hidden">
          <PersistentDrawerLeft />
        </li>

        <li className="hidden sm:flex">BreakDoor.com</li>
        {/* <Badge badgeContent={3} color="error" className="lg:flex hidden"> */}
        <li className="lg:flex hidden">Jobs</li>
        {/* </Badge> */}
        <li className=" lg:flex hidden">Companies</li>
        <li className=" lg:flex hidden">Services</li>
        <li>
          <input
            type="text"
            placeholder="Search jobs here"
            style={{
              border: "1px solid #e7e7f1",
              padding: "11px 8px 11px 16px",
              width: "35vh",
            }}
            className="p-0 rounded-[40px] text-[#717b9e] text-sm font-medium opacity-100  lg:flex hidden"
          />
        </li>
        <ul className="flex  items-center justify-end w-[90%] gap-7 sm:gap-14">
          <li>
            <Badge badgeContent={6} color="error">
              <IoIosNotificationsOutline />
            </Badge>
          </li>
          <li>
            <Badge badgeContent={5} color="error" className="flex">
              <RiMessage2Fill className="text-2xl" />
            </Badge>
          </li>
          <li
            className="hidden lg:flex relative"
            onClick={() => setShow(!show)}
          >
            <img
              className="h-8 w-8	rounded-[100px] md:hidden lg:flex sm:hidden hidden"
              src="https://wallpapercave.com/wp/wp7900881.jpg"
              alt="issue with login"
            />
          </li>
          {show && (
            <div
              className="absolute mt-[48vh] mr-2 z-10 h-[40vh] w-[14vw] bg-white"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
            >
              <Popover />
            </div>
          )}
          {/* <DropDown/> */}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
