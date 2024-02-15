import React, { useState } from "react";
import Header from "../UserMessages/Header";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiBox } from "react-icons/bi";
import MessagingIcon from "../Messaging/MessagingIcon";
const Messages = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Box className="w-[20%] fixed bottom-0 right-3">
      <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={
            <MessagingIcon setExpanded={setExpanded} expanded={expanded} />
          }
          sx={{
            pl: ".5rem",
            pb: "0",
            pt: "0",
            pr: ".5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/D5635AQGIOGeEf26XfA/profile-framedphoto-shrink_100_100/0/1702991658835?e=1708581600&v=beta&t=bDf8ThjK4P_Xx4SH6Agm83rkUO9VqEgYhNIkLOGvXw4"
              className="w-[30px]	h-[30px] rounded-[50%]"
            />
            <Typography fontSize=".8rem" fontWeight={"bold"}>
              Messaging
            </Typography>
          </Box>
        </AccordionSummary>
        <hr />
        <AccordionDetails sx={{ p: ".5rem", fontSize: "1rem" }}>
          <input
            type="text"
            placeholder="Search messages"
            className="bg-[#eef3f8] w-[100%] p-2"
          />
          <Box>
            <Box
              border={"1px solid gray"}
              height={"4rem"}
              width={"100%"}
              mt={3}
            ></Box>
            <Box></Box>
            <Box
              border={"1px solid gray"}
              height={"4rem"}
              width={"100%"}
              mt={3}
            ></Box>
            <Box
              border={"1px solid gray"}
              height={"4rem"}
              width={"100%"}
              mt={3}
            ></Box>
            <Box
              border={"1px solid gray"}
              height={"4rem"}
              width={"100%"}
              mt={3}
            ></Box>
          </Box>
        </AccordionDetails>
        {/* <React.Fragment>
        <Header />
      </React.Fragment>
      <hr />
      */}
      </Accordion>
    </Box>
  );
};

export default Messages;
