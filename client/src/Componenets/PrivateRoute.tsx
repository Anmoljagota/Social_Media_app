import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}:{children:any}) => {
  console.log(localStorage.getItem("token"),"hlooo")
  
    
if(localStorage.getItem("token")===null){
return <Navigate to="/register"/>
}
return children;
}

export default PrivateRoute
