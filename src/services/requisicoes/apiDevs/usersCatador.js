import apiDevs from '../../api/apiDevs'

/**
 *  REQUISICOES PARA OS CATADORES
 */

/**
 * Metodo para retornar lista de catadores @returns todos os catadores
 */
export async function getAllScavengers(){
    try {
        const result = await apiDevs.get('scavengers')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}
