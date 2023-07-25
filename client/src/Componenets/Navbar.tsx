import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import styles from "../AllCss/Navbar.module.css";
import DropDown from "./DropDown";
import DehazeIcon from "@mui/icons-material/Dehaze";
import PersistentDrawerLeft from "./Hameburger";
type Navbarcss = {
  maincss: string;
};

const Navbar: React.FC<Navbarcss> = ({ maincss }) => {
  return (
    <nav
      className="h-20 bg-white sticky z-50 cursor-pointer w-[100%]"
     
    >
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
            <Badge badgeContent={5} color="error" className="flex" >
              <RiMessage2Fill className="text-2xl" />
            </Badge>
          </li>
          <li className="hidden lg:flex">
            <img
              className="h-8 w-8	rounded-[100px] md:hidden lg:flex sm:hidden hidden"
              src="https://th.bing.com/th/id/R.6447203e2ac778c1088792ed6ba39c85?rik=ccpaj0GtdqxSHQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-xMmffgfkHF0%2fUApbyjPPJVI%2fAAAAAAAAAaw%2fZbezrexfRVM%2fs1600%2fkajal-agarwal-spicy-transparent-saree-stills-004.jpg&ehk=vuripsitEo3gaiQUg6Wd8F5%2fXD2qxHn%2fjofS2bDnCRg%3d&risl=&pid=ImgRaw&r=0"
              alt="issue with login"
            />
          </li>
          {/* <DropDown/> */}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
