import React, { useState } from 'react'
import CustomLogin from '../Componenets/CustomLogin'
import RegisterUserDetails from '../Types/Types'
const Register = () => {
  const [signupData,setSignupData]=useState<RegisterUserDetails|null>(null)
  return (
    <div className='bg-[#f8f9fa]'>
      <CustomLogin inputfield={5} setSignupData={setSignupData}/>
      
    </div>
  )
}

export default Register;
