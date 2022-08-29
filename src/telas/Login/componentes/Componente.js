import React, { useState } from "react";
import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../../componentes/CustomInput";
import CustomButton from "../../../componentes/CustomButton/CustomButton";
import CustonLink from "../../../componentes/Links/CustonLink";
import LoginGoogle from "../Autenticacao/loginGoogle";
import logo from '../../../../assets/logoAzul.png'
import { logarUser } from "../../../services/requisicoes/apiDevs/users";


export default function Componente({ props }) {

    const [email, setEmail] = useState('iury@gmail.com');
    const [senha, setSenha] = useState('123');


    return (
        <SafeAreaView style={estilos.root}>
            <Image source={logo} style={estilos.logo} />
            <View style={estilos.contanier}>

                <CustomInput
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder='Senha'
                    value={senha}
                    setValue={setSenha}
                    secureTextEntry={true}

                />
                <CustomButton text='Login' onPress={() => {
                    if (email === "" || senha === "") {
                        alert('Preencha todos os campos')
                    } else {
                        props.navigation.navigate("FeedScreen")
                        //logarUser(email, senha, props)
                    }

                }} />


                <CustonLink text='Esqueci senha'
                    onPress={() => {
                        props.navigation.navigate('CadastroScreen')
                    }} />

                <CustonLink text='Não possui uma conta? Cadastra-se' onPress={() => {
                    props.navigation.navigate('CadastroScreen')
                }} />

                <Text style={{ marginTop: 18 }}>logar com</Text>

                <LoginGoogle />

            </View>

        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    contanier: {
        marginVertical: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },

    logo: {
        width: 100,
        maxWidth: 200,
        height: 100,
        marginTop: 50,
    },
    registro: {
        color: '#a1a1a1',
    },

    inputs: {

    }
});