import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import CustomButton from "../../../componentes/CustomButton/CustomButton";
import imagem from "../../../assets/lixoVeropa.jpg";

/*
<HeaderOfScreen />
<MiddleOfScreen/>
<EndOfScreen/>
*/



export default function AnaliseColeta({}) {

    return <>
        <Text style={styles.txtTitle}>{'Barraca da Cheirosinha'}</Text>
        <View style={{ flexDirection: 'row', marginTop:4 }}>
            <FontAwesome name="map-marker" style={{marginLeft:16, alignSelf:'center'}} size={16} color={"#696969"}></FontAwesome>
            <Text style={styles.txtLocalizacao}>{'Prox ao bar da Lurdes'}</Text>
        </View>

        <Image source={imagem} style={styles.img} />
        <Text style={styles.txtDescricao}>{'descricao'}</Text> 
        <View style={{height:1, backgroundColor:"#cc0000", width:"85%", alignSelf:"center"}}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle2}>Material:</Text>
            <Text style={styles.txtLocalizacao2}>{'qtd'} - {'material'}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle2}>Estado:</Text>
            <Text style={styles.txtLocalizacao2}>{'estado'}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle2}>Horario:</Text>
            <Text style={styles.txtLocalizacao2}>{'horario'}</Text>
        </View>
        
        <CustomButton onPress={()=> {}} text={'Solicitar'}/>

    </>
}

const styles = StyleSheet.create({
    txtTitle: {
        color: "#cc0000",
        marginLeft: 16,
        fontSize:20,
        marginTop: 50,
        marginBottom: 4
    },
    txtLocalizacao: {
        marginLeft: 8,
        fontWeight:'bold',
        color:"#696969"
    },

    txtTitle2: {
        color: "#696969",
        marginTop: 16,
        fontWeight: "bold"
    },
    txtLocalizacao2: {
        alignSelf: "flex-end",
        color: "#cc0000",
        marginLeft: 8,
        fontWeight: "bold"
    },
    txtDescricao: {
        marginLeft: 16,
        marginTop: 16,
        fontSize:16,
        marginBottom:32
    },
    img:{
        marginTop:8,
        width:"90%",
        height:"35%",
        alignSelf:"center",
        borderRadius:16
        
    }
})


     