import Profile from "../Componenets/PostData/Profile";
import Posts from "../Componenets/PostData/Posts";
import Messages from "../Componenets/PostData/Messages";
import { Box } from "@mui/material";

const Home = () => {
 
  return (
    <div className=" w-[4/4] mt-28">
      <Box className="flex w-[75%] m-auto  justify-between" border={"1px solid red"}>
        <Profile />
        <Posts />
        <Messages />
      </Box>
    </div>
  );
};

export default Home;