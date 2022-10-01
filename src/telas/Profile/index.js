import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'
import Lista from "./componente/Lista";
/**
 * IMPORTS PARA O FEIRANTE
 */
import ViewFotoPerfilFeirante from "./FeiranteComponent/ViewFotoPerfilFeirante";
import DadosPessoais from './FeiranteComponent/DadosPessoais'
import Seguranca from "./FeiranteComponent/Seguranca";
import { verificarUsuarioAtual } from '../../services/requisicoes/apiDevs/users'
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
   const [currentUser, setCurrentUser] = useState({})

   useEffect(function () {
      (async () => {
         const user = await verificarUsuarioAtual(1)
         setCurrentUser(user)
      })()
   }, [])



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
                  userId={currentUser.id}
                  fotoUser={ProfilePic}
                  nomeBarraca={currentUser.name}
                  emailUser={currentUser.email}
               />
               <DadosPessoais userId={currentUser.id} cpf={currentUser.cpf} phone={currentUser.phone} />
               <Seguranca userId={currentUser.id} email={currentUser.email} />

            </SafeAreaView>
         </ScrollView>
      }

   </>





}