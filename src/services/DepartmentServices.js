import axios from "./AxiosServices";

export async function getAllDepartments(){
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

export async function deleteDepartmentById(id){
    try {
        const res = await axios({
            url:`/department/${id}`,
            method:'DELETE',
        })
        return res
    } catch (error) {
        return error.response
    }
}

export async function createModule(module){
    try {
        const data = new FormData()
        data.append('name',module.name)
        data.append('url',module.url)
        data.append('depart',module.depart)
        const dataObj = Object.fromEntries(data);
        const res = await axios({
            url:`/module`,
            method:'POST',
            data:dataObj
        })
        return res
    } catch (error) {
        return error.response
    }
}

export async function getAllModules(){
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

export async function ModulesAvailable(){
    try {
        const res = await axios({
            url:`/module/available`,
            method:'GET',
        })
        return res
    } catch (error) {
        return error.response
    }
}

