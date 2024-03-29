import React from "react";
import { Text,StyleSheet } from "react-native";
import AntesDosComentarios from "./Componentes/AntesDosComentarios";
import HeaderNoticia from "./Componentes/HeaderNoticia";

import ListaComentario from "./Componentes/ListaComentarios";

export default function NoticiaOrgaos(props) {
    const titulo = props.route.params.titulo
    const atendida = props.route.params.atendida
    const place = props.route.params.place
   

    return <>

        <Text style={styles.title}>{titulo}</Text>
        <HeaderNoticia local={place}/>
        <Text style={styles.description}>description</Text>
        <AntesDosComentarios isAtendida={atendida}/>
        <ListaComentario />
    </>
}


const styles = StyleSheet.create({
title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:8,
    marginLeft:16,
    marginBottom:8
},
description:{
    fontSize:16,
    marginTop:8,
    marginLeft:16,
    marginBottom:8
}
})