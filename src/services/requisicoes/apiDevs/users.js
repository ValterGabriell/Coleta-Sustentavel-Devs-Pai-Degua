import apiDevs from '../../api/apiDevs'
import AsyncStorage from '@react-native-async-storage/async-storage';




export async function getUsers() {
    try {
        const result = await apiDevs.get('usuarios')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}



/**
 * Função para logar o usuário gerando token e salvando localmente
 */
export async function logarUser(username, password, props) {
   
        await apiDevs.post('login', {
            email: username,
            senha: password
        }).then(response => {
            AsyncStorage.setItem('@token', response.data.token) 
            props.navigation.navigate("FeedScreen")
        })
    
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




