import CustomizedDialogs from "../Modal";
import NameImage from "../UserProfile/NameImage";

const Popover = () => {
  return (
    <div className="bg-white">
      <div className="p-1">
        <NameImage
          text="anmol jagota"
          imagedata="h-[40px] w-[40px] rounded-[50%]"
        />
        <button
          className="w-[100%] text-[#1861B4] rounded-[10px] text-sm font-bold mt-2"
          style={{ border: "1px solid #1861B4" }}
        >
          View Profile
        </button>
       
        
      </div>
    </div>
  );
};

export default Popover;
