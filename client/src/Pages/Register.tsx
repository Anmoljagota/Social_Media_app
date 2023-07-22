import React, { useEffect, useState } from "react";
import { Dispatch, AnyAction } from "redux";
import CustomLogin from "../Componenets/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { UserData } from "../redux/Login/action";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState<RegisterUserDetails|null>(null);
  console.log("i am details", signupData);
  // useEffect(() => {
  if (signupData) {
    dispatch(UserData(signupData));
  }
  // }, [signupData]);
  return (
    <div className="bg-[#f8f9fa]">
      <CustomLogin inputfield={5} setSignupData={setSignupData} />
    </div>
  );
};

export default Register;
