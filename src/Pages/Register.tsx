import React, { useEffect, useState } from 'react'
import CustomLogin from '../Componenets/CustomLogin'
import RegisterUserDetails from '../Types/Types'
import { UserData } from '../redux/Login/action'
const Register = () => {
  const [signupData,setSignupData]=useState<RegisterUserDetails|null>(null)
  console.log("i am details", signupData);
 
  return (
    <div className='bg-[#f8f9fa]'>
      <CustomLogin inputfield={5} setSignupData={setSignupData}/>
      
    </div>
  )
}

export default Register;
