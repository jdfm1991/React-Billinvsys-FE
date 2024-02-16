import axios from "./AxiosServices";

export async function getDepartments(){
    try {
        const res = await axios({
            url:`/department`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.response
    }
}

//Funcion de Accion Para Datos Iniciales
export async function saveDataUser(userData){
    try {
        const data = new FormData()
        data.append('name',userData.name)
        data.append('status',userData.status)
        data.append('email',userData.email)
        data.append('type',userData.type)
        data.append('password',userData.password)
        data.append('image',userData.image)
        for (let i = 0; i < userData.depart.length; i++) {
            data.append('depart['+i+']',userData.depart[i].code)
        }
        const res = await axios({
            url:`/user`,
            method:'POST',
            data: data
        })
        return res
    } catch (error) {
        return error.response
    }
}

//Funcion de Accion Para Datos Iniciales
export async function getDataUsers(){
    try {
        const res = await axios({
            url:`/user`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.response
    }
}

export async function getUserTypes(){
    try {
        const res = await axios({
            url:`/usertypes`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.response
    }
}


export async function getModules(){
    try {
        const res = await axios({
            url:`/module`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.response
    }
}

export async function getDataUser(id){
    try {
        const res = await axios({
            url:`/user/${id}`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.status
    }
}

//Funcion de Accion Para Eliminar Datos
export async function deleteDataUser(id){
    try {
        const res = await axios({
            url:`/user/${id}`,
            method:'DELETE'
        })
        return res
    } catch (error) {
        return error.response
    }
}

//Funcion de Accion Para Datos Iniciales
export async function updateDataUser(userData){
    try {
        const id = userData.id
        const data = new FormData()

        data.append('name',userData.name)
        data.append('status',userData.status)
        data.append('email',userData.email)
        data.append('type',userData.type)
        data.append('password',userData.password)
        data.append('image',userData.image)
        for (let i = 0; i < userData.depart.length; i++) {
            data.append('depart['+i+']',userData.depart[i].code)
        }
        const res = await axios({
            url:`/user/${id}`,
            method:'PUT',
            data: data
        })
        return res
    } catch (error) {
        return error.response
    }
}

  