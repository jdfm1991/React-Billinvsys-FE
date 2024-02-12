import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';

import AuthContext from "../context/Auth/AuthContext";

import logo from "../assets/logo.png"

const AuthFormModal = () => {

    const {getSession,message,handleClose,handleMessage} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const res = await getSession({
            email:email,
            password:password,
        })

        setTimeout(() => {
            handleMessage()
          }, 3000)
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className='justify-content-center align-items-center g-2 text-center'>
                    <Image src={logo} height="150" className="mr-3"/>
                        <Form.Group className='row justify-content-center'>
                            <Form.Label className='col-sm-3 col-form-label'>Email</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Control type="email" className="form-control form-control-sm" name="email" placeholder="Email Por Favor" value={ email }  onChange={ (e) => setEmail(e.target.value) } required />
                            </Form.Group>
                            <br /><br />
                            <Form.Label className='col-sm-3 col-form-label'>Password</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Control type="password" className="form-control form-control-sm" name="password" placeholder="Contraseña Por Favor"  value={ password } onChange={ (e) => setPassword(e.target.value)} required />
                            </Form.Group>
                        </Form.Group>
                        <p className={message?"p-2 mb-2 bg-danger-subtle text-emphasis-danger":''}> { message } </p>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="card-footer">
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant="primary">
                        Guardar
                    </Button>

                </Modal.Footer>
            </Form>            
        </>        
    )
}

export default AuthFormModal