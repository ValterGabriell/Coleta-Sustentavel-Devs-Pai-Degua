import React, { useState, createContext } from "react";
import { ActivityIndicator } from "react-native";
import apiDevs from '../services/api/apiDevs'
export const AuthContext = createContext({})
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Snackbar } from "react-native-paper";


export default function AuthProvider({ children }) {
    const [userType, setUserType] = useState({})
    const [userId, setUserId] = useState({})
    const [visible, setVisible] = useState(true)
    const navigation = useNavigation()
    const onDismissSnackBar = () => setVisible(false)

    /**
     * Função para logar o usuário gerando token e salvando localmente
     */
    function signIn(email, senha) {
        if (email !== '' && senha !== '') {
            <ActivityIndicator />
            apiDevs.post('login', {
                email: email,
                password: senha
            }).then(response => {
                var token = response.data.token                
                AsyncStorage.setItem('@token', token)
                apiDevs.get("authenticated").then((user)=>{
                    setUserType({
                        isCatador: false
                    })    

                    setUserId(
                        { userId: user.data.id }
                    )
                })
                navigation.navigate("FeedScreen")
            }).catch(erro => {
                alert(erro)
            })
        } else {
            <Snackbar visible={visible} onDismiss={onDismissSnackBar}></Snackbar>
        }


    }



    return (
        <AuthContext.Provider value={{ nome: "put", signIn, userType, userId }} >
            {children}
        </AuthContext.Provider>
    )
}
