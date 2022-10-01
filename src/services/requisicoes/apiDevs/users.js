import apiDevs from '../../api/apiDevs'

/**
 * REQUISICOES PARA OS FEIRANTES
 */



/**
 * Metodo para retornar lista de catadores online
 * @returns lista de catadores ONLINE
 */
export async function getScavengers() {
    try {
        const result = await apiDevs.get('scavengers')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}


/**
 * Metodo para retornar usuario atual
 * @param {Integer} idUser 
 * @returns usuario atual
 */
export async function verificarUsuarioAtual(idUser) {
    try {
        const result = await apiDevs.get(`merchants/${idUser}`)
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

/**
 * atualizar email do usuario
 * @param {email} email 
 * @returns newEmail
 */
export async function trocarEmailUsuario(userId, email, name, cpf, phone){
    try {
        const newEmail = await apiDevs.patch(`merchants/${userId}`, {email:email, name:name, cpf:cpf, phone:phone})
        return newEmail
    } catch (error) {
        console.log(error);
        return {}
    }
}

/**
 * atualizar cpf e telefone do usuario
 * @param {cpf, phone}  
 * @returns newResult
 */
 export async function trocarCpfAndPhoneUsuario(userId, cpf, phone){
    try {
        const newResult = await apiDevs.patch(`merchants/${userId}`, {email:email, cpf:cpf, phone:phone})
        return newResult
    } catch (error) {
        console.log(error);
        return {}
    }
}


/**
 * atualizar nome do usuario
 * @param {nome}  
 * @returns nome
 */
 export async function trocarNomeUser(userId, name){
    try {
        const name = await apiDevs.patch(`merchants/${userId}`, {name:name})
        return name
    } catch (error) {
        console.log(error);
        return {}
    }
}

export async function trocarSenhaUsuario(senha){
    try {
        console.log(senha);
        return senha

    } catch (error) {
        console.log(error);
        return {}
    }
}





