import React from "react";
import { SafeAreaView } from "react-native";
import Topo from "./componentes/Topo";


export default function CadastrarOrgao(props) {
    return <>
        <SafeAreaView>
           <Topo props={props}/>
        </SafeAreaView>
    </>
}