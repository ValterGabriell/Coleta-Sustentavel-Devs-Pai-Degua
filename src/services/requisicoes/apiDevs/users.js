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

export async function trocarEmailUsuario(email){
    try {
        console.log(email);
        return email

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





