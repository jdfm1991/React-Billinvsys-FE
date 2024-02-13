import React, { useContext, useEffect } from "react";
import UserLeftSide from "../components/UserLeftSide";
import UserRightSide from "../components/UserRightSide";
import UserState from "../context/User/UserState";
import AuthContext from "../context/Auth/AuthContext";

const UserLayout = () => {

    const {loadlog,cookieValidate} = useContext(AuthContext)

    useEffect( () => {
        cookieValidate()
    },[loadlog])

   
    return(
        <>
            <UserState>
                <div className="container-fluid">
                    <div className="justify-content-center">
                        <div className="row">
                            <div className="col-lg-5"><UserLeftSide  /></div>
                            <div className="col-lg-7"><UserRightSide /></div>
                        </div>
                    </div>
                </div>
            </UserState>

            
            
        </>
    )
  }
  
export default UserLayout