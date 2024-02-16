import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}:{children:any}) => {
    
if(localStorage.getItem("token")===null){
return <Navigate to="/login"/>
}
return children;
}

export default PrivateRoute
