import axios from "./AxiosServices";

export async function getDepartmentApp() {
    try {        
        const res = await axios({
            url:`/department`,
            method:'get',
        })
        return res
    } catch (error) {
        return error.response
    }
    
}

export async function getModuleApp() {
    try {        
        const res = await axios({
            url:`/module`,
            method:'get',
        })
        return res
    } catch (error) {
        return error.response
    }
    
}
//Funcion de Accion Para Datos Iniciales
export async function getDataLogin(userData){
    try {

        const data = new FormData()

        data.append('email',userData.email)
        data.append('password',userData.password)

        const dataObj = Object.fromEntries(data);
        
        const res = await axios({
            url:`/login`,
            method:'POST',
            data: dataObj
        })
        return res
    } catch (error) {
        return error.response
    }

}

export async function eraseDataLogin(){
    try {        
        const res = await axios({
            url:`/logout`,
            method:'POST',
        })
        return res
    } catch (error) {
        return error.response
    }

}

export async function tokenVerifiqued(token) {
    try {
        const res = await axios({
            url:`/token`,
            method:'POST',
            data: token
        })
        return res
    } catch (error) {
        return error.response
    }
    
}