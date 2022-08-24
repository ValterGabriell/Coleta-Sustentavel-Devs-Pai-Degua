import api from '../api'

export async function getAllsers(){
    try {
        const resultado = await api.get("users")
        console.log(resultado.data)
        return resultado.data[0]
    } catch (error) {
        console.log(error)
        return {}
    }
}