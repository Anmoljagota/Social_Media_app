import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { CgToolbox } from "react-icons/cg";
import { PiBuildingsThin } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import Container from "@mui/material/Container";
const ProfileDetails = () => {
  interface profile {
    name: string;
    icon: React.ReactNode;
  }

  const profile_details: profile[] = [
    { name: "My home", icon: <HiOutlineHome /> },
    { name: "Jobs", icon: <CgToolbox /> },
    { name: "Companies", icon: <PiBuildingsThin /> },
    { name: "Blog", icon: <GoBook /> },
  ];
  return (
    <div  className="mt-10">
      <Container className="h-[25vh] " style={{width:"95%"}}>
        {profile_details.map((items, i) => {
          return (
            <ul key={i} className="w-[100%] float-left pb-4">
              <li className="flex  items-center w-[100%]">
                <span className="text-xl">{items.icon}</span>{" "}
                <span className="ml-[16px] text-sm font-medium mt-[8px]">
                  {items.name}
                </span>
              </li>
            </ul>
          );
        })}
      </Container>
    </div>
  );
};

export default ProfileDetails;
