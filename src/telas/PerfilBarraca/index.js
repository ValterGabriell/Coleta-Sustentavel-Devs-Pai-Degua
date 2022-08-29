import React from "react";
import { Text } from "react-native";



export default function PerfilBarraca(props) {
    const titulo = props.route.params.titulo
    const image = props.route.params.image
    const place = props.route.params.place
    const description = props.route.params.descricao
    const atendida = props.route.params.isAtendida
    return <>
        <Text>{titulo}</Text>
        <Text>{place}</Text>
        <Text>{description}</Text>
        <Text>{atendida}</Text>
    </>
}