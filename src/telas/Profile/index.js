import React, { useContext } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'
import Lista from "./componente/Lista";
/**
 * IMPORTS PARA O FEIRANTE
 */
import ViewFotoPerfilFeirante from "./FeiranteComponent/ViewFotoPerfilFeirante";
import DadosPessoais from './FeiranteComponent/DadosPessoais'
import Descricao from './FeiranteComponent/Descricao'
import Seguranca from "./FeiranteComponent/Seguranca";
/**
 * FIM DOS IMPORTS PARA FEIRANTE
 */

import { AuthContext } from '../../contexts/auth'

export default function Profile(props) {
   /**
    *Trecho de codigor esponsavel por recuperar se o usuario é ou nao catador atraves do context api, sempre que quiseres mudar a tela para catador ou feirante, deve mudar o arquivo "isCatador"
    *que está na pasta contexts/auth no metodo signIn para true ou false e reiniciar a aplicação.
   
    Usar esse mesmo codigo abaixo para as outras telas que fores criar, importando o "import {AuthContext} from '../../contexts/auth'""

    */
   const { userType } = useContext(AuthContext)
   const isCatador = userType.isCatador


   return <>
      {isCatador ?
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"Catador"}
               emailUser={"vgabrielbri@hotrmail.com"}

            />

            <Lista props={props} isCatador={isCatador} />
         </SafeAreaView>
         : //SE FOR FEIRANTE
         <ScrollView>
            <SafeAreaView>
               <ViewFotoPerfilFeirante
                  fotoUser={ProfilePic}
                  nomeBarraca={"Barraca da cheirosinha"}
                  emailUser={"vgabrielbri@hotrmail.com"}
               />
               <DadosPessoais />
               <Descricao />
               <Seguranca/>

            </SafeAreaView>
         </ScrollView>
      }

   </>





}