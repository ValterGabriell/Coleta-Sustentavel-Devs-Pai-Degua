import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ProfilePic from '../../assets/profilePhoto.png'


import PerfilColetor from "./ColetorComponent/PerfilColetor";
/**
 * IMPORTS PARA O FEIRANTE
 */
import ViewFotoPerfilFeirante from "./FeiranteComponent/ViewFotoPerfilFeirante";
import DadosPessoais from './FeiranteComponent/DadosPessoais'
import Seguranca from "./FeiranteComponent/Seguranca";
import { verificarUsuarioAtual } from '../../services/requisicoes/apiDevs/users'
import { pegarFotoUsuario } from '../../services/requisicoes/apiDevs/users'


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
   const userId = userType.userId
   const [currentUser, setCurrentUser] = useState({})
   const [photoUser, setPhotoUser] = useState()



   async function requestCall() {
      const user = await verificarUsuarioAtual(userId)
      setCurrentUser(user)

      console.log(user.photo);

      if (user.photo != null) {
         const photo = await pegarFotoUsuario(user.photo.replace("/uploads/", ""))
         setPhotoUser(photo)
      }

   }

   useEffect(function () {
      (async () => {
         requestCall()
         props.navigation.addListener("focus", () => {
            requestCall()
         })
      })()
   }, [])



   return <>
      {isCatador ?
         <ScrollView>
            <SafeAreaView>
               <PerfilColetor user={currentUser} />
            </SafeAreaView>
         </ScrollView>
         : //SE FOR FEIRANTE
         <ScrollView>
            <SafeAreaView>

               <ViewFotoPerfilFeirante
                  userId={currentUser.id}
                  fotoUser={currentUser.photo}
                  nomeUser={currentUser.name}
                  emailUser={currentUser.email}
               />
               <DadosPessoais userId={currentUser.id} cpf={currentUser.cpf} phone={currentUser.phone} />
               <Seguranca userId={currentUser.id} email={currentUser.email} />

            </SafeAreaView>
         </ScrollView>
      }

   </>





}