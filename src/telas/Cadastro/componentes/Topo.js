import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

export default function Topo({ props }) {

    return <>
        <SafeAreaView>
            <Button onPress={() => {
                props.navigation.navigate('CadastroComum')
            }}>Ao clicar em usuario comum</Button>

            <Button onPress={() => {
                props.navigation.navigate('CadastroOrgao')
            }}>Ao clicar em orgao</Button>
        </SafeAreaView>
    </>
}