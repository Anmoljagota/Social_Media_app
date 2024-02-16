import React, { useEffect, useState } from "react";
import CustomLogin from "../Componenets/LoginSignupComponents/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/Login/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState<RegisterUserDetails | null>(null);
  const [details, setDetails] = useState<RegisterUserDetails | null>(null);
  React.useEffect(() => {
    if (login !== null) {
      dispatch(LoginUser(login));
    }
    setTimeout(() => {
      if (localStorage.getItem("token") !== null) {
        navigate("/");
      }
    }, 1000);
  }, [login]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogin(details);
  };
  return (
    <div>
      <CustomLogin
        inputfield={2}
        text="Login"
        setDetails={setDetails}
        details={details}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
