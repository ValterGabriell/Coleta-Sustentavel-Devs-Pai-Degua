import React, {useState, createContext} from "react";
import apiDevs from '../services/api/apiDevs'
export const AuthContext = createContext({})
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function AuthProvider({children}){
    const [userType, setUserType] = useState({})
    const navigation = useNavigation()


    
/**
 * Função para logar o usuário gerando token e salvando localmente
 */
    function signIn(email, senha){
        if (email !== '' && senha !== '') {
            apiDevs.post('login', {
                email: email,
                senha: senha
            }).then(response => {
                AsyncStorage.setItem('@token', response.data.token) 
                setUserType({
                    isCatador: false
                })
                navigation.navigate("FeedScreen")
            }).catch(erro =>{
                alert(erro)
            })    
        } else {
            
        }
        
    
    }



    return(
        <AuthContext.Provider value={{nome:"PUTA", signIn, userType}} >
            {children}
        </AuthContext.Provider>
    )
}