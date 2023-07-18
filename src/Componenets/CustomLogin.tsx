import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import HttpsIcon from "@mui/icons-material/Https";
import InstructionLogin from "./InstructionLogin";
import Stack from "@mui/material/Stack";
import RegisterUserDetails from "../Types/Types";
import { details_type } from "../Types/Types";

type user_input_data_type = {
  details: string;
  icon: React.ReactNode;
  name: string;
};

const CustomLogin: React.FC<details_type> = ({ inputfield, setSignupData }) => {
  const [details, setDetails] = useState<RegisterUserDetails | null>(null);
  const myinputs = new Array(inputfield).fill("-");
  const userdata: user_input_data_type[] = [
    {
      details: "Your Name",
      icon: (
        <AccountCircleIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "name",
    },
    {
      details: "Your Email",
      icon: (
        <EmailIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "email",
    },
    {
      details: "Your Phone",
      icon: (
        <PermPhoneMsgIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "PhoneNumber",
    },
    {
      details: "Your Password",
      icon: (
        <HttpsIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "password",
    },
    {
      details: "Current city",
      icon: (
        <HttpsIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "city",
    },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value}=e.target;
    
  };
  return (
    <div>
      <nav className="bg-white">
        <Box className="m-auto w-[95%] p-7 flex justify-between items-center">
          <text>BreakDoor.com</text>
          <text>Already Registered? Login here</text>
        </Box>
      </nav>
      <Box className="h-[100vh] flex justify-center items-center w-[95%] m-auto">
        <InstructionLogin />
        <Box
          className="flex w-[55%] m-auto h-[90vh] p-[70px]  float-right bg-white"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        >
          <Box className="flex justify-center items-center w-[100%] m-auto min-h-full">
            <Box className="w-2/4 min-h-full text-center">
              <h2 className="font-bold text-xl">
                Find a job & grow your career
              </h2>
              <br />
              {myinputs.map((items, i) => (
                <Box key={i}>
                  {userdata[i].icon}

                  <TextField
                    id="standard-basic"
                    label={userdata[i].details}
                    variant="standard"
                    style={{ width: "80%", padding: "5px", marginTop: "10px" }}
                    name={userdata[i].name}
                    onChange={handleChange}
                  />
                  <br />
                </Box>
              ))}
              <br />
              <Stack>
                <h4 className="">Resume</h4>
                <label
                  htmlFor="fileInput"
                  className="bg-[#f05537] text-white p-2 rounded-3xl cursor-pointer"
                >
                  Custom File Name
                </label>
                <input type="file" id="fileInput" className="hidden" />
              </Stack>
            </Box>
            <img
              className="h-[180px] w-[200px]"
              src="https://thumbs.dreamstime.com/z/young-woman-works-laptops-home-freelancer-girl-self-employed-online-education-distance-learning-concept-video-call-195563818.jpg"
              alt="something wrong "
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CustomLogin;
