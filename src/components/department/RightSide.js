import React, { useContext } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ListMod from "./ListMod";
import FormModal from "./FormModal";

import DepContext from "../../context/Department/DepContext";

const RightSide = () =>{

    const {handleShow,handleClose,show} = useContext(DepContext)

    return(
        <>
            <Card>
                <Card.Header>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <div className="text-end">
                            <Button variant="primary" onClick={handleShow}>
                                <i className="bi bi-folder-plus">Crear Modulo</i>
                            </Button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                   <ListMod />
                </Card.Body>
                <Card.Footer>
    
                </Card.Footer>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> unio </Modal.Title>
                </Modal.Header>
                <FormModal />
            </Modal>
        </>
    )
}

export default RightSide