import React from "react";
import { Text,StyleSheet } from "react-native";
import AntesDosComentarios from "./Componentes/AntesDosComentarios";
import HeaderNoticia from "./Componentes/HeaderNoticia";
import CampoComentario from './Componentes/CampoComentario'
import ListaComentario from "./Componentes/ListaComentarios";

export default function Noticia(props) {
    const titulo = props.route.params.titulo
    const image = props.route.params.image
    const place = props.route.params.place
    const description = props.route.params.descricao
    const atendida = props.route.params.isAtendida


    return <>
        <Text style={styles.title}>{titulo}</Text>
        <HeaderNoticia local={place} imagem={image}/>
        <Text style={styles.description}>{description}</Text>
        <AntesDosComentarios atendida={atendida}/>
        <CampoComentario props={props}/>
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