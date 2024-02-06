import React, { useReducer} from "react";
import Cookies from "js-cookie";
import { eraseDataLogin, getDataLogin, tokenVerifiqued } from "../../services/AuthSevices";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

const AuthState = (props) => {

    const initialState = {
        login : [],
        statuslog: false,
        loadlog:true,
        show: false,
        message: null,
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState)


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
            window.location.reload()
        }

        return res
    }

    const closeSession = async() => {

        const res = await eraseDataLogin()
        return res
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
            login:state.login,
            statuslog: state.statuslog,
            loadlog: state.loadlog,
            show: state.show,
            message:state.message,
            getSession:getSession,
            handleShow:handleShow,
            handleClose:handleClose,
            cookieValidate:cookieValidate,
            closeSession:closeSession
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState