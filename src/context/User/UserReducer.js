import { CHANGER, GET_USER, GET_USERS, MESSAGE, SHOWBTN, VIEW_MODAL } from "../types";

export default (state, action) => {

    const {type,payload} = action

    switch (type) {
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
                user : payload
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

