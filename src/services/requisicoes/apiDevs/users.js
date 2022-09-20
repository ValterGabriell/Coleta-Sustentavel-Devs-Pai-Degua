import apiDevs from '../../api/apiDevs'

export async function getUsers() {
    try {
        const result = await apiDevs.get('usuarios')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}


export async function verificarUsuarioAtual(idUser) {
    try {
        const result = await apiDevs.get(`usuarios/${idUser}`)
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





