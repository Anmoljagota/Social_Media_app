import React from 'react'
import CustomLogin from '../Componenets/CustomLogin';

type loginDetails={
    email?:string;
    password?:number | string
}
const Login = () => {
    const [login,setLogin]=React.useState<loginDetails | null>(null)
    console.log(login,"hlo")
  return (
    <div>
      <CustomLogin inputfield={2} setSignupData={setLogin} text="Login"/>
    </div>
  )
}

export default Login
