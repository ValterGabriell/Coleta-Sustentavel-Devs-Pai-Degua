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


/**
 * atualizar cpf e telefone do catador
 * @param {cpf, phone}  
 * @returns newResult
 */
 export async function editarPerfilCatador(userId, cpf, phone) {
    try {
        const newResult = await apiDevs.patch(`scavengers/${userId}`, { cpf: cpf, phone: phone })
        return newResult
    } catch (error) {
        console.log(error);
        return {}
    }
}

/**
 * atualizar nome do catador
 * @param {nome}  
 * @returns nome
 */
 export async function trocarNomeCatador(userId, name) {
    try {
        const newName = await apiDevs.patch(`scavengers/${userId}`, { name: name })
        return newName
    } catch (error) {
        console.log(error);
        return {}
    }
}

/**
 * Atualizar residuos AJEITAR
 */

export async function materialColeta(userId,name){
    try{
        const newResidue = await apiDevs.patch(`scavengers/${userId}`, { name: name })
        return newResidue
    }catch(error){
        return {}
    }
}

/**
 * atualizar email do catador
 * @param {email} email 
 * @returns newEmail
 */
 export async function trocarEmailCatador(userId, email) {
    try {
        const newEmail = await apiDevs.patch(`scavengers/${userId}`, { email: email })
        return newEmail
    } catch (error) {
        console.log(error);
        return {}
    }
}