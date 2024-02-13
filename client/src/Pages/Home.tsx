import Profile from "../Componenets/PostData/Profile";
import Posts from "../Componenets/PostData/Posts";
import Messages from "../Componenets/PostData/Messages";
import { Box } from "@mui/material";

const Home = () => {
 
  return (
    <div className=" w-[4/4] mt-28">
      <Box className="flex w-[80%] m-auto  justify-between">
        <Profile />
        <Posts />
        <Messages />
      </Box>
    </div>
  );
};

export default Home;
