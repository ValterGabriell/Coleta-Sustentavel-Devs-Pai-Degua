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
 * atualizar email do usuario
 * @param {email} email 
 * @returns newEmail
 */
export async function trocarEmailUsuario(userId, email) {
    try {
        const newEmail = await apiDevs.patch(`merchants/${userId}`, { email: email })
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
export async function trocarCpfAndPhoneUsuario(userId, cpf, phone) {
    try {
        const newResult = await apiDevs.patch(`merchants/${userId}`, { cpf: cpf, phone: phone })
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
export async function trocarNomeUser(userId, name) {
    try {
        const newName = await apiDevs.patch(`merchants/${userId}`, { name: name })
        return newName
    } catch (error) {
        console.log(error);
        return {}
    }
}

/**
 * Criar mercador
 */
export async function postMerchant({ name, email, password, photo, phone, cpf, props }) {
    try {
        await apiDevs.post('merchants', {
            name: name, email: email, password: password, photo: photo, phone: phone, cpf: cpf
        }).then((response) => {
            props.navigation.navigate("Login")
        }).catch((erro) => {
            console.log(erro);
        })

    } catch (error) {
        console.log(error);
        return {}
    }
}


/**
 * Criar catador
 */
export async function postScarvenger({ name, email, password, photo, phone, cpf, props }) {
    try {
        await apiDevs.post('scavengers', {
            name: name, email: email, password: password, photo: photo, phone: phone, cpf: cpf
        }).then((response) => {
            props.navigation.navigate("Login")
        }).catch((erro) => {
            console.log(erro);
        })

    } catch (error) {
        console.log(error);
        return {}
    }
}

export async function logout({props}) {
    console.log("logout");
}





