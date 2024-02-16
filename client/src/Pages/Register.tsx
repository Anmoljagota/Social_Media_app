import React, { useEffect, useState } from "react";
import { Dispatch, AnyAction } from "redux";
import CustomLogin from "../Componenets/LoginSignupComponents/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { UserData } from "../redux/Login/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState<RegisterUserDetails | null>(
    null
  );
  const [details, setDetails] = useState<RegisterUserDetails | null>(null);
  useEffect(() => {
    if (signupData !== null) {
      dispatch(UserData(signupData))
      .then((res:any)=>{
       res && navigate("/login")
       
      }).catch((err:any)=>{

      });
    }
  }, [signupData]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupData(details);
  };
  return (
    <div className="bg-[#f8f9fa]">
      <CustomLogin
        inputfield={5}
        text="Register"
        details={details}
        setDetails={setDetails}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
