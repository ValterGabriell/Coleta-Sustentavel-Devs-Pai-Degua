import React from "react";
import { Text } from "react-native";



export default function PerfilFeirante(props) {
    const name = props.route.params.name
    const email = props.route.params.email
    const telefone = props.route.params.telefone
   
    return <>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{telefone}</Text>
    
    </>
}