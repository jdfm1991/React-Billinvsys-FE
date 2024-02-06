import React, { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

//Modulo de Jquery
import $ from 'jquery';

const UserListLoad = () => {  

    const {users, getUsersList,getUser,deleteUser,handleShow,secondView} = useContext(UserContext)

    useEffect( () => {
        getUsersList()
    },[])

    const showData = async(id) => {
        await getUser(id)
        secondView()
    }

    return(
        <>   
        <table id="listuser" className="table table-striped table-hover table-sm" style={{width:'100%'}}>
            <thead className="table-group-divider">
                <tr>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Correo</th>
                    <th className="text-center">Accion</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {
                users.map( (Users) => (
                    <tr key={Users._id}>
                        <td className="text-center"> {Users.name} </td>
                        <td className="text-center"> {Users.email} </td>
                        <td className="text-center">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-success btnmodal" onClick={ () => handleShow(Users._id)} ><i className="bi bi-pencil-square">Editar</i></button>
                                <button type="button" className="btn btn-info btnload" onClick={ () => showData(Users._id) } ><i className="bi bi-download">cargar</i></button>
                                <button type="button" className="btn btn-danger btnmodal" onClick={ () => deleteUser(Users._id)} ><i className="bi bi-trash">Eliminar</i></button>
                            </div>
                        </td>
                    </tr>
                    ))
            }
            </tbody>
        </table>            
        </>
    )
}

export default UserListLoad