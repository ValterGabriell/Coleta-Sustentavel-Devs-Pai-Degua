import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

export default function Componente({ props }) {

    return <>
        <SafeAreaView>
            <Button onPress={() => {
                props.navigation.navigate('FeedScreen')
            }}>Ao clicar em logar e autenticar</Button>

            <Button onPress={() => {
                props.navigation.navigate('CadastroScreen')
            }}>Ao clicar em cadastrar</Button>


        </SafeAreaView>
    </>
}