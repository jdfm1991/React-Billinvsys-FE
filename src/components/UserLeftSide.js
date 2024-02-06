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
                <Card>
                    <Card.Header>
                        <div className="justify-content-center">
                            <div className="row">
                                <div className="text-center col-6">
                                    <p className="fw-bold">Registros</p>
                                </div>
                                <div id="btntable" className="text-center col-6">
                                    <Button variant="primary" onClick={ () => handleShow() }>
                                        <i className="bi bi-folder-plus">Nuevo Registro</i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div id="table">
                            <UserListLoad />  
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <p className="fw-bold fs-5 text-center">Lista de Usuarios <br /> Registrados</p>
                    </Card.Footer>
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