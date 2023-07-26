import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
const PostProfile = ({name}:{name:string}) => {
  return (
    <div className="w-[95%] m-auto p-1">
      <Stack direction="row" spacing={1}>
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="w-[48px] h-12 rounded-full"
        />
        <Box>
          <p className="text-base font-semibold decoration-[none solid rgb(10,102,194)]">
           {name}
            <span
              className="text-base text-slate-500"
              style={{ textDecoration: "none solid rgba(0,0,0,0.9)" }}
            >
              (He/Him)
            </span>
          </p>
          <p>50m+ views open to opportunities</p>
        </Box>
      </Stack>
    </div>
  );
};

export default PostProfile;
