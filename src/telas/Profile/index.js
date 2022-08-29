import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'
import Lista from "./componente/Lista";



export default function Profile(props) {
   const isCatador = false
   return <>
      {isCatador ?
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"Gabriel"}
               emailUser={"vgabrielbri@hotrmail.com"}
              
            />
            <Lista  props={props} isCatador={isCatador} />
         </SafeAreaView>
         : 
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"Feirante"}
               emailUser={"vgabrielbri@hotrmail.com"}

            />
            <Lista props={props} isCatador={isCatador}/>
         </SafeAreaView>

      }

   </>





}