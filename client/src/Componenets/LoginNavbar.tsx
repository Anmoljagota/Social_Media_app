import React from 'react'
import {Link} from "react-router-dom";
const LoginNavbar = ({inputfield}:{inputfield:number}) => {
  return (
    <nav className="bg-white">
    <ul className="m-auto w-[95%] p-7 flex justify-between items-center text-lg">
      <li>BreakDoor.com</li>
      {inputfield > 2 ? (
        <li>
          Already Registered?
          <Link to="/login">
            <span className="text-blue-600 font-bold"> Register</span>
          </Link>{" "}
          here
        </li>
      ) : (
        <li>
          New to BreakDoor
          <Link to="/register">
            <span className="text-blue-600 font-bold"> Login</span>
          </Link>{" "}
          here
        </li>
      )}
    </ul>
  </nav>
  )
}

export default LoginNavbar
