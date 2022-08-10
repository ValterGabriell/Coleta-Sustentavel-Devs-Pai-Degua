import React from "react";
import { SafeAreaView } from "react-native";
import FotoPerfil from "./componente/FotoPerfil";
import ProfilePic from '../../assets/profilePhoto.png'



export default function Profile(props) {
   return <>
      <SafeAreaView>
         <FotoPerfil 
         fotoUser={ProfilePic}
         nomeUser={"Gabriel"}
         emailUser={"vgabrielbri@hotrmail.com"}
         props={props}
         />
      </SafeAreaView>
   </>
}