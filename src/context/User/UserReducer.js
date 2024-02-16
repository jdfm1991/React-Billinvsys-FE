import { CHANGER, GET_DEPARTMENT, GET_MODULE, GET_USER, GET_USERS, GET_USERTYPE, MESSAGE, SHOWBTN, VIEW_MODAL } from "../types";

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
        case GET_USERS:
            return {
                ...state,
                users : payload.data,
                displayone : payload.view1,
                displaytwo : payload.view2,
                displaythree: payload.view3,
                displayfour: payload.view4,
            }
        case GET_USER:
            return {
                ...state,
                user : payload.datau,
                department: payload.datad
            }
        case GET_USERTYPE:
            return {
                ...state,
                usertypes : payload
            }
        case VIEW_MODAL:
            return {
                ...state,
                show : payload.view,
                title : payload.head,
                displaythree: payload.view3
            }
        case MESSAGE:
            return {
                ...state,
                message : payload,
            }
        case SHOWBTN: 
            return {
                ...state,
                displayone : payload.view1,
                displaytwo : payload.view2,
                displaythree: payload.view3,
                displayfour: payload.view4,
                enable: payload.enable
            }
        case CHANGER:
            return {
                ...state,
                enable : payload.enable,
                displayfour: payload.view1,
                displaythree: payload.view2
            }
        default:
            return state;
    }
}

