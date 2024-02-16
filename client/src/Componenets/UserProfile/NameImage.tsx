import { Stack } from "@mui/material";
interface componentdata {
  imagedata: string;
  text: string;
}
const NameImage: React.FC<componentdata> = ({ imagedata, text }) => {
 
  return (
    <Stack direction="row" spacing={1} className="flex  items-center">
      <img
        src="https://media.licdn.com/dms/image/D5635AQGIOGeEf26XfA/profile-framedphoto-shrink_100_100/0/1702991658835?e=1708660800&v=beta&t=uK91r8Dc5fVkYj5BbNktAkmPK2cmz1eUqRVi3W9E40Y"
        className={imagedata}
        alt="error"
      />
      <h3 className="font-bold text-sm">{text}</h3>
    </Stack>
  );
};

export default NameImage;
