import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import HttpsIcon from "@mui/icons-material/Https";
import InstructionLogin from "./InstructionLogin";
import RegisterUserDetails from "../../Types/Types";
import { details_type } from "../../Types/Types";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginNavbar from "./LoginNavbar";

type user_input_data_type = {
  details: string;
  icon: React.ReactNode;
  name: string;
};

const CustomLogin: React.FC<details_type> = ({
  inputfield,
  handleSubmit,
  text,
  setDetails,
  details,
}) => {
  // const [details, setDetails] = useState<RegisterUserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
  const registerdetails =
    text === "login"
      ? {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }
      : {display:"block"};
  const LoginPlaceholder: user_input_data_type[] = [
    {
      details: "email",
      icon: (
        <EmailIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "email",
    },
    {
      details: "password",
      icon: (
        <HttpsIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "30px" }}
        />
      ),
      name: "password",
    },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  return (
    <>
      <Box className="xsm:hidden sm:block">
        {localStorage.getItem("token") == undefined && (
          <LoginNavbar inputfield={inputfield} />
        )}
      </Box>

      <main
        className="flex justify-evenly  md:w-[95%] xsm:w-full m-auto mt-10"
       
      >
        <Box className="bg-white xsm:hidden md:block h-[100%]">
          <InstructionLogin instructionText={text} />
        </Box>
        <Box
          className="flex  pt-[70px]  pb-[70px] pl-7 pr-7   float-right bg-white md:w-[45%] xsm:w-full"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        >
          <Box className="flex justify-between items-center w-[100%] m-auto min-h-full">
            <Box className=" min-h-full text-center w-full lg:pr-6">
              <h2 className="font-bold text-xl text-left">
                Find a job & grow your career
              </h2>

              <form onSubmit={handleSubmit} className="mt-8">
                {myinputs.map((items, i) => (
                  <Box key={i} display={"flex"}>
                    {inputfield > 2
                      ? userdata[i].icon
                      : LoginPlaceholder[i].icon}

                    <TextField
                      id="standard-basic"
                      label={
                        inputfield > 2
                          ? userdata[i].details
                          : LoginPlaceholder[i].details
                      }
                      variant="standard"
                      style={{
                        padding: "5px",
                        marginTop: "10px",
                        width: "100%",
                      }}
                      name={
                        inputfield > 2
                          ? userdata[i].name
                          : LoginPlaceholder[i].name
                      }
                      onChange={handleChange}
                    />
                    <br />
                  </Box>
                ))}

                {/* <Stack>
                <h4 className="">Resume</h4>
                <label
                htmlFor="fileInput"
                className="bg-[#f05537] text-white p-2 rounded-3xl cursor-pointer"
                >
                Custom File Name
                </label>
                <input type="file" id="fileInput" className="hidden" />
              </Stack> */}
                <LoadingButton
                  variant="contained"
                  loadingIndicator="Loading…"
                  loading={loading}
                  style={{
                    fontWeight: "700",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    marginTop: "25px",
                  }}
                  type="submit"
                >
                  {text}
                </LoadingButton>
              </form>
            </Box>
            <img
              className="h-[200px] w-[220px] xsm:hidden lg:block"
              src="https://thumbs.dreamstime.com/z/young-woman-works-laptops-home-freelancer-girl-self-employed-online-education-distance-learning-concept-video-call-195563818.jpg"
              alt="something wrong "
            />
          </Box>
        </Box>
      </main>
    </>
  );
};

export default React.memo(CustomLogin);
