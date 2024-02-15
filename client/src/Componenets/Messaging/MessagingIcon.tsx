import { Box, Stack } from "@mui/material";
import { PiDotsThreeBold } from "react-icons/pi";

import { FaEdit } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
interface MessagingIconProps {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}
const MessagingIcon: React.FC<MessagingIconProps> = ({
  setExpanded,
  expanded,
}) => {
  const Item = styled("div")({
    // Static background color

    height: "1.8rem",
    width: "1.8rem",
    textAlign: "center",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#EEECEC"
    },
  });
  return (
    <Stack
      direction="row"
      spacing={0.5}
      fontSize={".8rem"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Item>
        <PiDotsThreeBold />
      </Item>
      <Item>
        <FaEdit />
      </Item>
      <Item onClick={() => setExpanded(!expanded)}>
        <ExpandMoreIcon />
      </Item>
    </Stack>
  );
};

export default MessagingIcon;
