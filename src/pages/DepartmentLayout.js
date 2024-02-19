import React from "react";
import LeftSide from "../components/department/LeftSide";
import RightSide from "../components/department/RightSide";
import DepState from "../context/Department/DepState";

const DepartmentLayout = () => {

    return(
        <>
            <DepState>
                <div className="container-fluid">
                    <div className="justify-content-center">
                        <div className="row">
                            <div className="col-md-6 mt-3"><LeftSide /></div>
                            <div className="col-md-6 mt-3"><RightSide /></div>
                        </div>
                    </div>
                </div>
            </DepState>  
        </>
    )
  }
  
export default DepartmentLayout