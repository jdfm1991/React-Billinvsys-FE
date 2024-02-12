import React, { useReducer} from "react";
import Swal from 'sweetalert2'
import Cookies from "js-cookie";
import { eraseDataLogin, getDataLogin, getDepartmentApp, getModuleApp, tokenVerifiqued } from "../../services/AuthSevices";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

const AuthState = (props) => {

    const initialState = {
        department: [],
        module: [],
        login : [],
        statuslog: false,
        loadlog:true,
        show: false,
        message: null,
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState)

    const getDepartment = async () => {
        const resD = await getDepartmentApp()
        dispatch({
            type: 'GET_DEPARTMENT',
            payload: resD.data,   
        })
        for (let i = 0; i < resD.data.length; i++) {
            const id = resD.data[i];
            const resM = await getModuleApp(id)
            dispatch({
                type: 'GET_MODULE',
                payload: resM.data,   
            })
            
        }
    }

    const getModule = async (id) => {
        const res = await getModuleApp(id)
        dispatch({
            type: 'GET_MODULE',
            payload: res.data,   
        })
    }

    const getSession = async(data) => {
        const res = await getDataLogin(data)
        
        if (res.status === 400) {
            if (res.data.error) {
                handleMessage(res.data.error) 
            }else{
                handleMessage(res.data) 
            }       
        }

        if (res.status === 201 || res.status === 200) {
            handleMessage('')
            dispatch({
                type: 'GET_LOGIN',
                payload: {
                    data: {
                        data:res.data,
                        status:true
                    },
                },   
            }) 
            handleClose()
        }

        if (res.data.message) {
            Swal.fire({
                icon: "success",
                title: "Good job!",
                text: "Welcome "+ res.data.name,
                showConfirmButton: false,
                timer: 1500
              });
        }

        return res
    }

    const closeSession = async() => {
        await eraseDataLogin()
        window.location.reload();
    }

    const handleMessage = (message) => {
        dispatch({
            type: 'MESSAGE',
            payload: message
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

    const cookieValidate = async() => {
        const cookie = Cookies.get()

        if(!cookie.token){
            dispatch({
                type: 'LOGOUT',
                payload: {
                    data:[],
                    status: false
                }   
            })
            return
        }

        try {
            const res = await tokenVerifiqued(cookie)
            if(res.status===200){
                dispatch({
                    type: 'AUTHCOOKIE',
                    payload: {
                        data:res.data,
                        status: true
                    }   
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'LOGOUT',
                payload: {
                    data:[],
                    status: false
                }   
            })
        }

        
        
        
    }
    
    return(
        <AuthContext.Provider value={{
            department: state.department,
            module: state.module,
            login: state.login,
            statuslog: state.statuslog,
            loadlog: state.loadlog,
            show: state.show,
            message: state.message,
            cookieValidate,
            getDepartment,
            getModule,
            handleShow,
            getSession,
            handleMessage,
            handleClose,
            closeSession
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState