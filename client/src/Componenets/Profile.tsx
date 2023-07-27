import { Box, Stack } from "@mui/material";
import React from "react";
import ProfileDetails from "./UserProfile/ProfileDetails";

const Profile = () => {
  return (
    <div
      className="w-[22%] h-[100vh] rounded-xl font-normal leading-5 bg-[white] sticky top-14"
      style={{
        border: "1px solid #e7e7f1",
        fontFamily: "Satoshi",
        textDecoration: "non solid rgba(18,18,36)",
        padding: "20px 20px 0px 20px",
      }}
    >
      <Box className="flex  items-center flex-col text-center text-[12px]">
        <img
          src="https://th.bing.com/th/id/OIP.uWncwmu7lQL8D0bu7U7y7QHaFz?pid=ImgDet&rs=1"
          className="w-[70px]	h-[70px] rounded-[50%] ml-[9px] mr-[9px]"
          style={{ border: "5px solid #44E744" }}
        />

        <div className="font-bold text-lg" style={{ padding: "10px 0px 0px" }}>
          Anmol Jagota
        </div>

        <div className="text-[12px] leading-4 font-medium pt-[1px]">
          <div className="p-[2px]">MCA Computers</div>
          <div>@ Chandigarh Univwersity</div>
        </div>
        <p className="mt-[3px] text-[#717b9e]">Last Updated Today</p>
        <div
          className="w-[70%] m-auto bg-[#275DF5] font-bold text-[white] text-sm rounded-[20px] text-[14px] mt-4"
          style={{ padding: "9px 14px" }}
        >
          Complete Profile
        </div>
        <React.Fragment>
          <ProfileDetails />
        </React.Fragment>
      </Box>
    </div>
  );
};

export default Profile;
