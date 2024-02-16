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
import { PiImageSquareLight } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { RiMoreLine } from "react-icons/ri";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { ADD_POST_DATA } from "../redux/SiteDta/action";

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

export default function CustomizedDialogs({ setChange, change }: any) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const buttonstyle = {
    backgroundColor: "#0a66c2",
    color: "#fff",
    fontWeight: 600,
    borderRadius: "15px",
    padding: "7px 20px 7px 20px",
  };
  const buttonstyleDisabled = {
    backgroundColor: "rgb(0 0 0 / 8%)",
    color: "rgb(0 0 0 / 30%)",
    borderRadius: "15px",
    padding: "7px 20px 7px 20px",
  };
  const icons = [
    { icon: <PiImageSquareLight /> },
    { icon: <CiVideoOn /> },
    { icon: <RxCalendar /> },
    { icon: <RiMoreLine /> },
  ];

  const [selectedFile, setselectedFile] = React.useState<string | null>(null);
  const [isDisabled, setisDisabled] = React.useState<boolean>(true);
  const [newfile, setNewfile] = React.useState<string | Blob>("");
  const [description, setDescription] = React.useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setNewfile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setselectedFile(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  };
  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 0) {
      setDescription(event.target.value);
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  };
  const handlePostData = async () => {
    const formdata = new FormData();
    formdata.append("file", newfile);
    formdata.append("description", JSON.stringify(description));

    const promise = dispatch(ADD_POST_DATA(formdata));

    return promise;
  };
  const PostClose = async () => {
    isDisabled === false && handleClose();
    isDisabled === false &&
      handlePostData().then((res) => {
        setChange(!change);
        setisDisabled(true);
      });
  };
  return (
    <div>
      <Box className="flex  bg-white  justify-between items-center p-2 rounded-lg">
        <img
          src="https://media.licdn.com/dms/image/D5635AQGIOGeEf26XfA/profile-framedphoto-shrink_100_100/0/1702991658835?e=1708660800&v=beta&t=uK91r8Dc5fVkYj5BbNktAkmPK2cmz1eUqRVi3W9E40Y"
          className="w-[45px]	h-[45px] rounded-[50%] ml-[9px] mr-[9px]"
        />
        <Box
          className="w-full p-[.6rem] rounded-[2rem] hover:bg-[#E7E5E6]"
          border={"1px solid rgba(0,0,0,0.3)"}
          onClick={handleClickOpen}
        >
          <Typography color={"rgba(0,0,0,0.6)"} fontWeight={"500"}>
            Start a post
          </Typography>
        </Box>
      </Box>
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
            <textarea
              className="p-3"
              id="message"
              name="message"
              rows={2}
              cols={68}
              placeholder="what do you want to talk about?"
              onChange={handleDescription}
            ></textarea>
          </Typography>
          <Typography>
            {selectedFile && (
              <div>
                {selectedFile.includes("data:image") ? (
                  <img src={selectedFile} alt="Selected" width="100%" />
                ) : (
                  <embed
                    src={selectedFile}
                    type="application/pdf"
                    width="100%"
                    height="500"
                    style={{ border: "1px solid red" }}
                  />
                )}
              </div>
            )}
          </Typography>
          <Typography
            gutterBottom
            className="flex items-center justify-between w-[40%]"
          >
            {icons.map((ele, index) => {
              return (
                <label htmlFor="file" key={index}>
                  <Box className="bg-[#f3f2ef] p-3 rounded-3xl text-[#666] text-lg hover:p-[15px] cursor-pointer">
                    {ele.icon}
                  </Box>

                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="hidden"
                    onChange={handleFileChange}
                  ></input>
                </label>
              );
            })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            style={isDisabled ? buttonstyleDisabled : buttonstyle}
            onClick={PostClose}
          >
            Post
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
