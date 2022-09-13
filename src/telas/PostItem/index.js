import React from "react";
import { View } from "react-native";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";


export default function PostItem(props) {
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const material = props.route.params.material
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = "Bom"
    const horario = "10h - 12h"
    const qtd = "2k"
    console.log("imagem" + imagem);
    return <>
        <HeaderOfScreen titulo={titulo} localizacao={localizacao} />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={material} estado={estado} horario={horario} qtd={qtd} />
    </>
}