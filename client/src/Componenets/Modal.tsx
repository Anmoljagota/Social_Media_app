import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import NameImage from "./UserProfile/NameImage";
import {PiImageSquareLight} from "react-icons/pi";
import {CiVideoOn} from "react-icons/ci";
import {RxCalendar} from "react-icons/rx";
import {RiMoreLine} from "react-icons/ri";
import Box from '@mui/material/Box';
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

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
    const icons=[
        {icon:<PiImageSquareLight/>},
        {icon:<CiVideoOn/>},
        {icon:<RxCalendar/>},
        {icon:<RiMoreLine/>}
    ]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <NameImage
            text="anmol jagota"
            imagedata="h-[40px] w-[40px] rounded-[50%]"
          />
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <textarea className="p-3" id="message" name="message" rows={10} cols={60} placeholder="what do you want to talk about?"></textarea>
          </Typography>
          <Typography gutterBottom className="flex items-center justify-between w-[40%]">
          {icons.map((ele,index)=>{
          return <Box className="bg-[#f3f2ef] p-3 rounded-3xl text-[#666] text-lg hover:p-[15px] cursor-pointer">
           {ele.icon}
          </Box>
        })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
