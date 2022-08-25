import axios from "axios"

export const apiDevs = axios.create({
    baseURL:"http://192.168.1.7:3333/"
})

export default apiDevs