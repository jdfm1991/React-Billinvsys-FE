import React, { useContext, useEffect, useState, useRef} from "react";
import { Button, Form, Modal } from "react-bootstrap";

import DepContext from "../../context/Department/DepContext";

const FormModal = () => {

    const {departments,handleSubmit,getModulesAvailable,modulesaval} = useContext(DepContext)

    const [id, setId] =useState('')
    const [name, setName] =useState('')
    const [url, setUrl] =useState('')
    const [depart, setDepart] =useState('')
    
    useEffect( () => {
        getModulesAvailable()
    }, [])

    const resetForm = () => {

    }


    const _handleSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            id:id,
            name:name,
            url:url,
            depart:depart
        });
               
    }

    return(
        <>
            <Form onSubmit={ _handleSubmit } className="m-3">                    
                <Form.Group className='justify-content-start align-items-center g-2 text-end'>
                    <Form.Group className='row mb-3'>
                        <Form.Label className='col-sm-3 col-form-label'>Nombre</Form.Label>
                        <Form.Group className='col-sm-7'>
                            <Form.Control type="text" className="form-control form-control-sm" name="name" placeholder="Nombre Por Favor" value={ name } onChange={ (e) => setName(e.target.value)} required/>
                        </Form.Group>
                        <div className="col-sm-2"></div>
                        <Form.Label className='col-sm-3 col-form-label'>Direccion</Form.Label>
                        <Form.Group className='col-sm-5 mb-2'>
                            <Form.Select className="form-select form-control-sm" name="modul" value={url}  onChange={ (e) => setUrl(e.target.value)}>
                                <option>Selecione </option>
                                {
                                    modulesaval.map( (ma) => (
                                        <option key={ma} value={ma}>{ma}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <div className="col-sm-4"></div>
                        <Form.Label className='col-sm-3 col-form-label'>Departmento</Form.Label>
                        <Form.Group className='col-sm-6'>
                            <Form.Select className="form-select form-control-sm" name="depart" value={depart}  onChange={ (e) => setDepart(e.target.value)}>
                                <option>Selecione </option>
                                {
                                    departments.map( (dep) => (
                                        <option key={dep._id} value={dep._id}>{dep.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Form.Group>
                </Form.Group>
                <Modal.Footer className="card-footer mb-2 px-4">
                    <Button variant="warning">
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

export default FormModal