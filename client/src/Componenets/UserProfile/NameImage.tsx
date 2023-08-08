import { Stack } from "@mui/material";
interface componentdata {
  imagedata: string;
  text: string;
}
const NameImage: React.FC<componentdata> = ({ imagedata, text }) => {
 
  return (
    <Stack direction="row" spacing={1}>
      <img
        src="https://media.licdn.com/dms/image/D5635AQHcTagXU7lu3A/profile-framedphoto-shrink_100_100/0/1668011892238?e=1691834400&v=beta&t=OgnTY3VjfEQMgLsNtj0uKeSxcpvTmwFBSOyMqKHsKQE"
        className={imagedata}
        alt="error"
      />
      <h3 className="font-bold text-sm">{text}</h3>
    </Stack>
  );
};

export default NameImage;
