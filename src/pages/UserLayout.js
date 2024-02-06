import React from "react";
import HeaderLayout from "../components/HeaderLayout";
import UserLeftSide from "../components/UserLeftSide";
import UserRightSide from "../components/UserRightSide";
import UserState from "../context/User/UserState";

const UserLayout = () => {
   
    return(
        <>
            <HeaderLayout /> 
            <UserState>
                <div className="container-fluid">
                    <div className="justify-content-center">
                        <h1 className='mt-4 text-center fw-bold fs-3'>Modulo de Usuario</h1>
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