import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

export default function Topo({ props }) {

    return <>
        <SafeAreaView>
            <Button onPress={() => {
                props.navigation.navigate('FeedScreen')
            }}>Cadastrar Comum</Button>
        </SafeAreaView>
    </>
}