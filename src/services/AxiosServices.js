import axios from "axios";

const URI = process.env.REACT_APP_DB_URI

const instance = axios.create({
    baseURL: URI,
    withCredentials:true,
})

export default instance