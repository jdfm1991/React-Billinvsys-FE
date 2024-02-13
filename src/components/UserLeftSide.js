import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserListLoad from "./UserListLoad";
import UserFormModal from "./UserFormModal";
import UserContext from "../context/User/UserContext";


const UserLeftSide = () =>{

    const {handleShow,handleClose,show,title} = useContext(UserContext)
    return(
        <>
            <div id="letf">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <div id="btntable" className="text-end">
                        <Button variant="primary" onClick={ () => handleShow() }>
                            <i className="bi bi-folder-plus">Nuevo Registro</i>
                        </Button>
                    </div>
                </div>
                <Card>
                    <Card.Body>
                        <div id="table">
                            <UserListLoad />  
                        </div>
                    </Card.Body>
                </Card>       
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> { title } </Modal.Title>
                </Modal.Header>
                <UserFormModal/>
            </Modal>

            
        </>
    )
}

export default UserLeftSide