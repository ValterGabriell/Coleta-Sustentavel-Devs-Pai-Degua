import React from "react";
import Topo from './componentes/Topo'
import { SafeAreaView } from "react-native";


export default function Cadastro(props) {
    return <>
        <SafeAreaView>
           <Topo props={props}/>
        </SafeAreaView>
    </>
}