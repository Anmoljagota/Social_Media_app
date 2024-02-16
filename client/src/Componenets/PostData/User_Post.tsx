import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NameImage from "../UserProfile/NameImage";  
import { PiImageSquareLight } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { RiMoreLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { ADD_POST_DATA } from "../../redux/SiteDta/action"; 
import { Box, Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
const User_Post = () => {
    
    
  return (
    <div>



        
       <Box className="flex  bg-white  justify-between items-center p-2">
        <img
          src="https://media.licdn.com/dms/image/D5635AQGIOGeEf26XfA/profile-framedphoto-shrink_100_100/0/1702991658835?e=1708660800&v=beta&t=uK91r8Dc5fVkYj5BbNktAkmPK2cmz1eUqRVi3W9E40Y"
          className="w-[45px]	h-[45px] rounded-[50%] ml-[9px] mr-[9px]"
        />
        <Box
          className="w-full p-[.6rem] rounded-[2rem] hover:bg-[#E7E5E6]"
          border={"1px solid rgba(0,0,0,0.3)"}
        >
          <Typography color={"rgba(0,0,0,0.6)"} fontWeight={"500"}>
            Start a post
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default User_Post
