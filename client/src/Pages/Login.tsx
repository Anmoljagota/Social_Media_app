import React from "react";
import CustomLogin from "../Componenets/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { useDispatch } from "react-redux";
import { LoginUser, UserData } from "../redux/Login/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState<RegisterUserDetails | null>(null);
  React.useEffect(() => {
    if (login !== null) {
      dispatch(LoginUser(login));
    }
  }, [login]);
  return (
    <div>
      <CustomLogin inputfield={2} setSignupData={setLogin} text="Login" />
    </div>
  );
};

export default Login;
