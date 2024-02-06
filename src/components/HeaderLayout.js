import React, { useContext } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthFormModal from "./AuthFormModal";
import AuthContext from "../context/Auth/AuthContext";
import { Link } from "react-router-dom";


const HeaderLayout = () => {

    const {show,handleShow,handleClose,loadlog,closeSession} = useContext(AuthContext)
    
    const _closeSession = async() => {
        await closeSession()
        window.location.reload()
    }

    return(
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <div className="logo me-auto container-fluid d-flex ">
                        <h1><a href="/#">Lumia</a></h1>
                        <a href="/#"><Image src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                    
                                <li style={{display:loadlog ? 'flex' : 'none'}}><Link className="nav-link scrollto" to="/user">Usuarios</Link></li>
                        
                            <li><a className="nav-link scrollto " href="#about">Portafolio</a></li>
                            <li><a className="nav-link scrollto" href="#services">Testimonials</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <div className="header-social-links d-flex align-items-center">
                        {
                            loadlog ?
                            <Button className="linkedin" variant="dark" onClick={_closeSession}>
                                <i className="bi bi-person-fill-slash"></i>
                            </Button> :
                            <Button className="linkedin" variant="light" onClick={handleShow}>
                                <i className="bi bi-person-fill-check"></i>
                            </Button>
                        }
                        
                    </div>

                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h1 class="modal-title fs-5">Inicio de Sesion</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AuthFormModal/>
                </Modal.Body>
                
            </Modal>

        </>
    )
  }
  
export default HeaderLayout