import apiDevs from '../../api/apiDevs'
import AsyncStorage from '@react-native-async-storage/async-storage';




export async function getUsers() {
    try {
        const result = await apiDevs.get('usuarios', { headers: { Authorization: "" } })
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}




export async function logarUser(username, password, props) {
    try {
        await apiDevs.post('login', {
            email: username,
            senha: password
        }).then(res => {
            props.navigation.navigate('FeedScreen')

        })

    } catch (error) {
        console.log(error)
        return {}
    }
}



