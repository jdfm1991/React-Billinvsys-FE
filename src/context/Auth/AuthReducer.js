import { AUTHCOOKIE, GET_DEPARTMENT, GET_LOGIN, GET_MODULE, LOGOUT, MESSAGE, VIEW_MODAL } from "../types";

export default (state, action) => {

    const {type,payload} = action
    
    switch (type) {
        case GET_DEPARTMENT:
            return {
                ...state,
                department : payload
            }
        case GET_MODULE:
            return {
                ...state,
                module : payload
            }
        case GET_LOGIN:
            return {
                ...state,
                login : payload.data,
                statuslog: payload.status

            }
        case VIEW_MODAL:
            return {
                ...state,
                show : payload
            }
        case MESSAGE:
            return {
                ...state,
                message : payload,
            }
        case AUTHCOOKIE:
            return {
                ...state,
                login : payload.data,
                statuslog: payload.status
            }

        case LOGOUT:
            return {
                ...state,
                login : payload.data,
                loadlog: payload.status
            }
        default:
            return state;
    }
}