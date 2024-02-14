import React, { useContext, useEffect, useState, useRef} from "react";
import { Message } from 'primereact/message'
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserContext from "../context/User/UserContext";

const UserFormModal = () => {

    const {user, deleteUser,handleClose,handleSubmit,message,handleMessage,firstView,enable,changeStatus,displaythree,displayfour,getTypes,usertypes} = useContext(UserContext)
    
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)
    const image = useRef()

    useEffect( () => {
        if (user._id) {
            setId(user._id)
            setName(user.name)
            setStatus(user.status)
            setEmail(user.email)
            setType(user.type)
            setPassword(user.password)
        } else {
            setId('')
            setName('')
            setStatus(false)
            setEmail('')
            setType('')
            setPassword('')  
        }
        getTypes()
    }, [user])

    const resetForm = () => {
        setId('')
        setName('')
        setEmail('')
        setType('')
        setPassword('')
        setStatus(false)
    }

    const _passMode = () => {
        firstView() 
        resetForm()
        handleClose()
    }

    const _handleSubmit = (e) => {
        e.preventDefault(); 
        
            handleSubmit({
                name:name,
                email:email,
                type:type,
                password:password,
                status:status,
                image:image
            })

            setTimeout(() => {
                handleMessage()
              }, 3000)
            //resetForm()
               
    }

    return(
        <>
            <Form onSubmit={ _handleSubmit }>
                <Modal.Body>
                    <Form.Group className='justify-content-center align-items-center g-2 text-center'>
                        <Form.Group className='mb-3 row'>
                            <Form.Label className='col-sm-2 col-form-label'>Nombre</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Control type="text" className="form-control form-control-sm" name="name" placeholder="Nombre Por Favor" value={ name } onChange={ (e) => setName(e.target.value) } required disabled={enable} />
                            </Form.Group>
                            <Form.Group className='col-sm-2 form-check-label'>
                                <Form.Check inline label='Estatus' name='status' type='checkbox' checked={ status } onChange={ (e) => setStatus(e.target.checked)} disabled={enable}/>
                            </Form.Group>
                            <br /><br />
                            <Form.Label className='col-sm-2 col-form-label'>Email</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Control type="email" className="form-control form-control-sm" name="email" placeholder="Email Por Favor" value={ email }  onChange={ (e) => setEmail(e.target.value)} disabled={enable}/>
                            </Form.Group>
                            <div className='col-sm-3'></div>
                            <br /><br />
                            <Form.Label className='col-sm-2 col-form-label'>Categoria</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Select className="form-select form-control-sm" name="type" value={ type}  onChange={ (e) => setType(e.target.value)} disabled={enable}>
                                    <option>seleciones </option>
                                    {
                                        usertypes.map((type) => (
                                            <option key={type._id} value={type._id}> {type.name} </option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <div className='col-sm-3'></div>
                            <br /><br />
                            <Form.Label className='col-sm-3 col-form-label'>Contraseña</Form.Label>
                            <Form.Group className='col-sm-7'>
                                <Form.Control type="password" className="form-control form-control-sm" name="password" placeholder="Contraseña Por Favor" value={ password } onChange={ (e) => setPassword(e.target.value)} required disabled={enable}/>
                            </Form.Group>
                            <br /><br />
                            <Form.Group className='col-sm-12'>
                                <Form.Control className="form-control form-control-sm" name="image" type="file" accept="image/x-png,image/gif,image/jpeg" ref={image} disabled={enable}/>
                            </Form.Group>
                        </Form.Group>
                    </Form.Group>
                    {
                        message ?
                        <div className="flex flex-wrap align-items-center justify-content-center gap-3">
                            <Message severity="error" text={message} />
                        </div>
                        : ''
                    }
                </Modal.Body>
                <Modal.Footer className="card-footer">
                    <Button variant="warning" onClick={ _passMode } >
                    Cancelar
                    </Button>
                    <Button variant="success" className="btncard" onClick={ changeStatus } style={{display:displayfour}}>
                        <i className="bi bi-folder-plus" >Editar</i>
                    </Button>
                    <Button variant="danger" className="btncard" onClick={ () => deleteUser(id)} style={{display:displayfour}}>
                        <i className="bi bi-folder-plus">Eliminar</i>
                    </Button>
                    <Button type='submit' variant="primary" className='btnmodal' style={{display:displaythree}}>
                        Guardar
                    </Button>

                </Modal.Footer>
            </Form>            
        </>        
    )
}

export default UserFormModal