import React from "react";
import HeaderOfScreen from './ComponentFeirante/HeaderOfScreen'
import Barraca from '../../assets/barraca.png'
import EndOfScreen from "./ComponentFeirante/EndOfScreen";
export default function BarracaPerfil() {
    return <>
        <HeaderOfScreen 
        titulo={"Barraca da cheirosinha"}
        email={"vgabrielbri@hotmail.com"}
        imagem={Barraca}
        local={"Bloco das hortifruit, barraca 12"}
        horario = {"8h as 14h"}
        />

        <EndOfScreen descricao={"Descricao muito feita"} />


    </>
  }