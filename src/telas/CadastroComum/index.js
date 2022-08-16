import React from "react";
import { SafeAreaView } from "react-native";
import Topo from './componente/Topo'
import Forms from './componente/Forms'

export default function CadastroComum(props) {
    return <>
        <SafeAreaView>
            <Forms />
            <Topo props={props} />

        </SafeAreaView>
    </>
}