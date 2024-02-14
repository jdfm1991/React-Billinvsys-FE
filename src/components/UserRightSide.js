import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import UserFormModal, {  } from "./UserFormModal";
import logo from "../assets/logo.png"

import UserContext from "../context/User/UserContext";

const UserRightSide = () =>{

    const {displayone,displaytwo,firstView} = useContext(UserContext)

    return(
        <>
            <div id="right">
                <Card>
                    <Card.Body>
                        <div style={{display:displayone}}>
                            <UserFormModal />
                        </div>
                        <div className="justify-content-center align-items-center g-2 text-center" style={{display:displaytwo}}>
                            <Image className="logoright" src={logo}/>
                        </div>   
                    </Card.Body>
                    <Card.Footer>
                    <Button type='submit' variant="primary" style={{display:displaytwo}} onClick={ () => firstView(displayone,displaytwo)}>
                        Nuevo
                    </Button>
                    </Card.Footer>
                </Card>
               
            </div>
        </>
    )
}

export default UserRightSide