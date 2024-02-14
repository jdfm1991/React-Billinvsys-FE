import React, { useReducer} from "react";
import { deleteDataUser, getDataUser, getDataUsers, getUserTypes, saveDataUser, updateDataUser } from "../../services/UserServices";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const UserState = (props) => {

    const initialState = {
        users: [],
        user: [],
        usertypes: [],
        show: false,
        title: null,
        message: null,
        displayone: 'none',
        displaytwo: 'flex',
        displaythree: 'none',
        displayfour: 'none',
        enable:false
    }

    const [state, dispatch] = useReducer(UserReducer,initialState)

    const firstView = (view1,view2) => {
        
        dispatch({
            type: 'SHOWBTN',
            payload: {
                view1: view1 === 'none' ? 'block' : 'none',
                view2: view2 === 'flex' ? 'none' : 'flex',
                view3: 'flex',
                view4: 'none',
            }
        })
    }

    const secondView = () => {
        dispatch({
            type: 'SHOWBTN',
            payload: {
                view1: 'block',
                view2: 'none',
                view3: 'none',
                view4: 'flex',
                enable: true
            }
        })
    }

    const changeStatus = () => {
        
        dispatch({
            type: 'CHANGER',
            payload: {
                enable: !state.enable,
                view1: 'none',
                view2: 'flex'
            }
        })
    }

    const handleShow = (id) => {
        if (id === undefined) {
            dispatch({
                type: 'VIEW_MODAL',
                payload: {
                    view: true,
                    head: 'Nuevo Registro',
                    view3: 'flex'
                }
            })
        } else{
            getUser(id)
            dispatch({
                type: 'VIEW_MODAL',
                payload: {view:true,head:'Editar Registro'}
            })
        }
    }

    const handleClose = () => {
        getUser()
        dispatch({
            type: 'VIEW_MODAL',
            payload: false
        })
    }

    const handleMessage = (message) => {
        dispatch({
            type: 'MESSAGE',
            payload: message
        })
    }

    const statusValidator = async (res) => {

        if (res.status === 500) {
            handleMessage(res.statusText + ' ' + res.data.message)
        }
        if (res.status === 401) {
            handleMessage(res.statusText + ' ' + res.data.message)
        }
        if (res.status === 400) {
            handleMessage(res.data)
        }
        if (res.status === 201 || res.status === 200) {
            handleClose()
            getUsersList()
            handleMessage()
        }
    }

    const handleSubmit = async (data) => {
        
        if (data.id) {
            const res = await updateDataUser(data)
           statusValidator(res)
        } else{
            const res = await saveDataUser(data)
            statusValidator(res)
            console.log(res)
        }
                
    }

    const getUsersList = async () => {

        const res = await getDataUsers()
        dispatch({
            type: 'GET_USERS',
            payload: {
                data: res.data,
                view1: 'none',
                view2: 'flex',
                view3: 'none',
                view4: 'none',}
        })
    }

    const getUser = async (id) => {
        const res = await getDataUser(id)
        dispatch({
            type: 'GET_USER',
            payload: res.data
        })
    }

    const getTypes = async (id) => {
        const res = await getUserTypes()
        dispatch({
            type: 'GET_USERTYPE',
            payload: res.data
        })
    }



    const deleteUser = async (id) => {
        const res = await deleteDataUser(id)
        console.log(res)
        getUsersList()
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            user: state.user,
            usertypes: state.usertypes,
            show: state.show,
            title: state.title,
            message: state.message,
            displayone: state.displayone,
            displaytwo: state.displaytwo,
            displaythree: state.displaythree,
            displayfour: state.displayfour,
            enable: state.enable,
            handleSubmit,
            getUsersList,
            getUser,
            deleteUser,
            handleShow,
            handleClose,
            firstView,
            secondView,
            changeStatus,
            getTypes,
            handleMessage
            }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState