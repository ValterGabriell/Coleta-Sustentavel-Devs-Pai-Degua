import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'
import { Chip } from 'react-native-paper';
import ListaDenuncia from "./componente/ListDenuncia";



export default function Profile(props) {
   const isComumUser = true
   return <>
      {isComumUser ?
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"Gabriel"}
               emailUser={"vgabrielbri@hotrmail.com"}
               props={props}
            />


            <ListaDenuncia />
         </SafeAreaView>
         : //ternario
         <SafeAreaView>
            <FotoPerfil
               fotoUser={ProfilePic}
               nomeUser={"orgs"}
               emailUser={"vgabrielbri@hotrmail.com"}
               props={props}
            />
            <ListaDenuncia />
         </SafeAreaView>

      }

   </>





}