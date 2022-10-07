import React from "react";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";
import CustomButton from "../../../componentes/CustomButton/CustomButton";

/*
*/ 

export default function AnaliseColeta(props) {
    const id = props.route.params.id
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = props.route.params.state
    const horario = props.route.params.data
    const qtd = props.route.params.quantidade



    return <>
        <HeaderOfScreen titulo={titulo} localizacao={localizacao} />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={"material"} estado={estado} horario={horario} qtd={qtd} />
        <CustomButton onPress={()=> {}} text={'Solicitar'}/>

    </>
}

     