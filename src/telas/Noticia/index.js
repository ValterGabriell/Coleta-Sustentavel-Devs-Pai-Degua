import React from "react";
import { Text } from "react-native";
import AntesDosComentarios from "./Componentes/AntesDosComentarios";
import HeaderNoticia from "./Componentes/HeaderNoticia";
import CampoComentario from './Componentes/CampoComentario'
import ListaComentario from "./Componentes/ListaComentarios";

export default function Noticia() {
    return <>
        <Text>Titulo noticia</Text>
        <HeaderNoticia/>
        <Text>Breve descricao apenas teste</Text>
        <AntesDosComentarios/>
        <CampoComentario/>
        <ListaComentario/>
        

    </>
}