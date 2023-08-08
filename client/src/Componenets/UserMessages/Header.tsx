import NameImage from "../UserProfile/NameImage";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[40%] p-2">
     <NameImage imagedata="h-[40px] w-[40px] rounded-[50%]" text="Messaging"/>
    </div>
   
  );
};

export default Header;
