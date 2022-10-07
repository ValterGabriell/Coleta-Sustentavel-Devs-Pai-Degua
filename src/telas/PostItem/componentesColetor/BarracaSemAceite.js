import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TurboModuleRegistry } from "react-native";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";
import CustomButton from "../../../componentes/CustomButton/CustomButton";

export default function AnaliseColeta(props) {
    const id = props.route.params.id
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = props.route.params.state
    const isAtentida = props.route.params.status
    const horario = props.route.params.data
    const qtd = props.route.params.quantidade


    var changeStatusOfColect = () => {
        var isGoingThere = isAtentida
        var finalizado = true
        setfinished(false)
        
        if (isGoingThere && !finalizado) {
            setLoading(isGoingThere)
        }else if(isGoingThere && finalizado){
            setfinished(true)
        }
      
    }


    useEffect(() => {
        changeStatusOfColect()

    }, [])


    return <>
        <HeaderOfScreen titulo={titulo} localizacao={localizacao} />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={"material"} estado={estado} horario={horario} qtd={qtd} />

        {
            <CustomButton onPress={()=> {}} text={'Solicitar'} type={' '}/>
        }


    </>
}


const styles = StyleSheet.create({
    txtLoading: {
        color: "#004444",
        fontWeight: "bold",
        alignSelf: "center",
        flex: 1
    }
});