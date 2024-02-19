import { GET_DEPARTMENT, GET_MODULE, GET_MODULE_AV, MESSAGE, VIEW_MODAL } from "../types";

export default (state, action) => {

    const {type,payload} = action
    
    switch (type) {
        case GET_DEPARTMENT:
            return {
                ...state,
                departments : payload
            }
        case GET_MODULE:
            return {
                ...state,
                modules : payload
            }
        case GET_MODULE_AV:
            return {
                ...state,
                modulesaval : payload
            }
        case MESSAGE:
            return {
                ...state,
                message : payload
            }
        case VIEW_MODAL:
            return {
                ...state,
                show : payload
            }
        default:
            return state;
    }
}