import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'
import ListaDenuncia from "./componente/ListDenuncia";



export default function Profile(props) {
   const isComumUser = false
   return <>
      {isComumUser ?
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"Gabriel"}
               emailUser={"vgabrielbri@hotrmail.com"}
              
            />
            <ListaDenuncia  props={props} isComumUser={isComumUser} />
         </SafeAreaView>
         : //ternario
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"orgs"}
               emailUser={"vgabrielbri@hotrmail.com"}

            />
            <ListaDenuncia props={props} isComumUser={isComumUser}/>
         </SafeAreaView>

      }

   </>





}