import { AUTHCOOKIE, GET_LOGIN, LOGOUT, MESSAGE, VIEW_MODAL } from "../types";

export default (state, action) => {

    const {type,payload} = action

    switch (type) {
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