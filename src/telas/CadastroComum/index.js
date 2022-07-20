import React from "react";
import { SafeAreaView } from "react-native";
import Topo from './componente/Topo'


export default function CadastroComum(props) {
    return <>
        <SafeAreaView>
            <Topo props={props}/>
        </SafeAreaView>
    </>
}