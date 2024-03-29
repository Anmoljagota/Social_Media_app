import React from "react";
import Stack from "@mui/material/Stack";
import { BiSolidCheckCircle } from "react-icons/bi";
import { Box } from "@mui/material";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}
interface instruction_details {
  instr: string;
}
const InstructionLogin = ({ instructionText }: { instructionText: string }) => {
  const instructions: instruction_details[] = [
    { instr: "Build your profile and let recruiters find you" },
    { instr: "Get job postings delivered right to your email" },
    { instr: "Find a job and grow your career" },
  ];
  const imageProps: ImageProps = {
    src: "https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png",
    className: "rounded-full",
    alt: "Description of the image",
  };
  return (
    <div
      className="w-[100%] p-4"
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <img {...imageProps} className="h-36 m-auto" alt="instructions error" />
      <h5 className="text-lg font-bold	mt-5 text-center">
        On {instructionText}, you can
      </h5>
      <Stack spacing={2} className="m-auto w-[95%] mt-2">
        {instructions.map((items, i) => (
          <Box className="flex" key={i}>
            <BiSolidCheckCircle style={{ color: "#47b749" }} />{" "}
            <Box className="text-slate-600 text-sm font-medium pl-1">
              {items.instr}
            </Box>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default InstructionLogin;
