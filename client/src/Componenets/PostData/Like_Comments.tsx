import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import Box from "@mui/material/Box";
interface social_links {
  icon: React.ReactNode;
  name: string;
}
const Like_Comments = () => {
  const social_links_details: social_links[] = [
    { icon: <AiOutlineLike />, name: "Like" },
    { icon: <FaRegCommentDots />, name: "Comments" },
    { icon: <BiRepost />, name: "Repost" },
    { icon: <BsFillSendFill />, name: "Send" },
  ];
  return (
    <footer className="flex justify-between items-center w-[90%] m-auto text-xl text-slate-600 mt-1">
      {social_links_details.map((ele, i) => {
        return (
          <Box className="flex justify-between items-center" key={i}>
            {ele.icon}
            <p>{ele.name}</p>
          </Box>
        );
      })}
    </footer>
  );
};

export default Like_Comments;
