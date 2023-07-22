import React, { useEffect, useState } from "react";
import { Dispatch, AnyAction } from "redux";
import CustomLogin from "../Componenets/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { UserData } from "../redux/Login/action";
import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const details=useSelector((data)=>console.log(data))
  const [signupData, setSignupData] = useState<RegisterUserDetails|null>(null);
 
  useEffect(() => {
  if (signupData!==null) {
    dispatch(UserData(signupData));
  }
  }, [signupData]);

  return (
    <div className="bg-[#f8f9fa]">
      <CustomLogin inputfield={5} setSignupData={setSignupData} text="Register now"/>
    </div>
  );
};

export default Register;
