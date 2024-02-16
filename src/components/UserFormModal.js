import React, { useContext, useEffect, useState, useRef} from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Message } from 'primereact/message'
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import $ from "jquery";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserContext from "../context/User/UserContext";
import { Card } from "react-bootstrap";



const UserFormModal = () => {

    const {
        user,
        usertypes,
        departments,
        department,
        modules,
        module,
        message,
        getDepartment,
        getTypes,
        getModule,
        handleMessage,
        handleClose,
        handleSubmit,
        firstView,
        enable,
        changeStatus,
        displaythree,
        displayfour
    } = useContext(UserContext)
    
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [depart, setDepart] = useState([])
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)
    const image = useRef()
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);

    const itemSelect = [];

    const items = [
        {
            label: 'Informacion General',
            command: (event) => {
                $('#form1').show()
                $('#form2').hide()
            }
        },
        {
            label: 'Departamento / Mmodulos',
            command: (event) => {
                $('#form2').show()
                $('#form1').hide()
            }
        },
    ];

    useEffect( () => {
        if (user._id) {
            setId(user._id)
            setName(user.name)
            setStatus(user.status)
            setEmail(user.email)
            setType(user.type)
            setPassword(user.password)
            setDepart(department) 
        } else {
            setId('')
            setName('')
            setStatus(false)
            setEmail('')
            setType('')
            setPassword('') 
            setDepart('') 
        }
        getTypes()
        getDepartment()
        getModule()
        $('#form2').hide()
    }, [user])

    const resetForm = () => {
        setId('')
        setName('')
        setEmail('')
        setType('')
        setPassword('')
        setStatus(false)
        setDepart('')
    }

    const _passMode = () => {
        firstView() 
        resetForm()
        handleClose()
    }

    const _handleSubmit = (e) => {
        e.preventDefault(); 
        handleSubmit({
            id:id,
            name:name,
            email:email,
            type:type,
            depart:depart,
            password:password,
            status:status,
            image:image
        })

        setTimeout(() => {
        handleMessage()
        }, 8000)
        //resetForm()
               
    }

    departments.forEach( (dep) => {
        itemSelect.push({
            name: dep.name,
            code: dep._id
        })
    })
    return(
        <>
        <Card>
            <Card.Header>
                <Toast ref={toast}></Toast>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            </Card.Header>

            <Form onSubmit={ _handleSubmit }>
                <Modal.Body>
                    <br />
                    <div id="form1">
                        <Form.Group className='justify-content-start align-items-center g-2 text-end'>
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
                                <Form.Label className='col-sm-2 col-form-label'>Departamento</Form.Label>
                                <Form.Group className='col-4'>
                                    <MultiSelect value={depart} onChange={(e) => setDepart(e.target.value)} options={itemSelect} optionLabel="name" placeholder="Select Cities" maxSelectedLabels={1} disabled={enable} />
                                </Form.Group>
                                <Form.Label className='col-sm-2 col-form-label'>Tipo de Usuario</Form.Label>
                                <Form.Group className='col-sm-3'>
                                    <Form.Select className="form-select form-control-sm" name="type" value={ type}  onChange={ (e) => setType(e.target.value)} disabled={enable}>
                                        <option>seleciones </option>
                                        {
                                            usertypes.map((type) => (
                                                <option key={type._id} value={type._id}> {type.name} </option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <br /><br />
                                <Form.Label className='col-sm-3 col-form-label'>Contraseña</Form.Label>
                                <Form.Group className='col-sm-7'>
                                    <Form.Control type="password" className="form-control form-control-sm" name="password" placeholder="Contraseña Por Favor" value={ password } onChange={ (e) => setPassword(e.target.value)} required disabled={enable}/>
                                </Form.Group>
                                <br /><br />
                                <Form.Group className='col-sm-12 px-5'>
                                    <Form.Control className="form-control form-control-sm" name="image" type="file" accept="image/x-png,image/gif,image/jpeg" ref={image} disabled={enable}/>
                                </Form.Group>
                            </Form.Group>
                        </Form.Group>
                    </div>
                    <div id="form2" style={{display:'block'}}>
                        <Form.Group className='justify-content-center align-items-center g-2 text-center'>
                            <Form.Group className='mb-3 row'>
                                
                            </Form.Group>
                        </Form.Group>
                    </div>
                    
                    {
                        message ?
                        <div className="flex flex-wrap align-items-center justify-content-center gap-3">
                            <Message severity="error" text={message} />
                        </div>
                        : ''
                    }
                </Modal.Body>
                <Modal.Footer className="card-footer mb-2 px-4">
                    <Button variant="warning" onClick={ _passMode } >
                    Cancelar
                    </Button>
                    <Button variant="success" className="btncard" onClick={ changeStatus } style={{display:displayfour}}>
                        <i className="bi bi-folder-plus" >Editar</i>
                    </Button>
                    <Button type='submit' variant="primary" className='btnmodal' style={{display:displaythree}}>
                        Guardar
                    </Button>

                </Modal.Footer>
            </Form>  

        </Card>          
        </>        
    )
}

export default UserFormModal