import React, { useReducer } from 'react';
import DepContext from "./DepContext";
import DepReducer from "./DepReducer";
import { ModulesAvailable, createModule, deleteDepartmentById, getAllDepartments, getAllModules } from '../../services/DepartmentServices';

function DepState(props) {

    const initialState = {
        departments:[],
        modules:[],
        modulesaval:[],
        message:null,
        show: false,
    }

    const [state, dispatch] = useReducer(DepReducer,initialState)

    const handleSubmit = async (data) => {  
        await createModule(data)
        getDepartments()        
    }

    const getDepartments = async() => {
        const res = await getAllDepartments()
        dispatch({
            type: 'GET_DEPARTMENT',
            payload: res.data  
        })

    }

    const deleteDepartment = async(id) => {
        const res = await deleteDepartmentById(id)
        dispatch({
            type: 'MESSAGE',
            payload: res.data.message,
            
        })
        getDepartments()
        return res        
    }

    const getmodules = async() => {
        const res = await getAllModules()
        dispatch({
            type: 'GET_MODULE',
            payload: res.data  
        })

    }

    const getModulesAvailable = async() => {
        const res = await ModulesAvailable()
        dispatch({
            type: 'GET_MODULE_AV',
            payload: res.data  
        })

    }

    const handleShow = () => {
        dispatch({
            type: 'VIEW_MODAL',
            payload: true
        })
        
    }

    const handleClose = () => {
        dispatch({
            type: 'VIEW_MODAL',
            payload: false
        })
    }

    return (
        <DepContext.Provider value={{
            departments:state.departments,
            modules:state.modules,
            modulesaval:state.modulesaval,
            message:state.message,
            show:state.show,
            handleSubmit,
            getDepartments,
            deleteDepartment,
            getmodules,
            getModulesAvailable,
            handleShow,
            handleClose
        }}>
            {props.children}
        </DepContext.Provider>
    );
}

export default DepState;