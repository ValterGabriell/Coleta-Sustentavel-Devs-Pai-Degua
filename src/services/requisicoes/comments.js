import api from '../api/api'

export async function getAllComments(){
    try {
        const resultado = await api.get("comments")
        return resultado.data
    } catch (error) {
        console.log(error)
        return {}
    }
}