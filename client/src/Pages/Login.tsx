import React from "react";
import CustomLogin from "../Componenets/CustomLogin";
import RegisterUserDetails from "../Types/Types";
import { useDispatch } from "react-redux";
import { UserData } from "../redux/Login/action";

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState<RegisterUserDetails | null>(null);
  console.log(login, "hlo");
  React.useEffect(() => {
    if (login !== null) {
      dispatch(UserData(login));
    }
  }, [login]);
  return (
    <div>
      <CustomLogin inputfield={2} setSignupData={setLogin} text="Login" />
    </div>
  );
};

export default Login;
