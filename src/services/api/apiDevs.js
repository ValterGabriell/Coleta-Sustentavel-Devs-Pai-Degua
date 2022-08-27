import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiDevs = axios.create(
    {
        baseURL: "http://192.168.1.7:3333/"
    })

//trecho de codigo responsavel por interceptar todas as request que fizermos
apiDevs.interceptors.request.use(async (config) => {
    try {
        const token = await AsyncStorage.getItem('@token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`  
        } 
        console.log(token)

        return config

    } catch (error) {
        console.log(error)
    }
})


export default apiDevs