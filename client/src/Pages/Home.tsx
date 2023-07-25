import React from "react";
import Profile from "../Componenets/Profile";
import Posts from "../Componenets/Posts";
import Messages from "../Componenets/Messages";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div
      className=" w-[4/4] mt-28 h-[100vh]"
      // style={{ border: "2px solid black" }}
    >
      <Box
        className="flex w-[85%] m-auto items-center justify-between"
        // border="2px solid red"
      >
        <Profile />
        <Posts />
        <Messages />
      </Box>
    </div>
  );
};

export default Home;
