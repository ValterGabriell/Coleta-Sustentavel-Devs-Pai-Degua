import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import profile from '../../../../assets/profile.png'


export default function ListItem() {
    //avatar, nome, horario
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={profile} style={styles.photo}/>
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>Secretária Municipal do Meio Ambiente</Text>
                <Text style={styles.subtitulo}>Funcionamento: 08h ás 12h - 14h ás 17h</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginLeft: 30,
        marginRight:30,
        borderBottomWidth: 1,
        borderBottomColor: "#0078AA",
        paddingTop: 15,
        paddingBottom:15,
    },
    photo:{
        width: 50,
        height: 50,
        borderRadius: 30, 
    },

    itemInfo:{
        marginLeft: 20,
    },

    itemP1:{
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
        fontWeight: '600',
    },

    subtitulo:{
        color: '#717171'
    }
})