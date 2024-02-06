import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./context/Auth/AuthContext";

function ProtectedViews() {

  const {loadlog,statuslog,cookieValidate} = useContext(AuthContext)

  useEffect( () => {
    cookieValidate()
  },[loadlog])

  if (!loadlog && !statuslog) return <Navigate to={'/'} replace />

    return ( 
      <>
        <Outlet />
      </>
    )
  }
  
  export default ProtectedViews;