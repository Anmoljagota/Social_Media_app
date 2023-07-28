import { Stack } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[40%] p-2">
      {/* <Stack className="flex justify-between items-center" style={{border:"1px solid red"}}> */}
      <img
        src="https://th.bing.com/th/id/R.d1539c5866cbade1fa3baa60ab22947b?rik=ylz48fJVEinCXg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpTqre6K8c.jpg&ehk=cGvYf7tkBaV%2f9loyHSKIcMvPLg7qKw4VmyVuOBkUu%2fY%3d&risl=&pid=ImgRaw&r=0"
        className="w-[30px]	h-[30px] rounded-[50%]"
      />
      <p className="text-sm font-bold">Messaging</p>
      {/* </Stack> */}
    </div>
  );
};

export default Header;
