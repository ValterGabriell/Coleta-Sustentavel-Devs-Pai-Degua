import React from "react";
import { Text, Image, View, StyleSheet} from "react-native";



export default function Corpo({imagem, titulo, descricao}){
    return<View style={{marginStart: 16,marginTop: 20}}>
        <View style={styles.contanier}>
            <Image source={imagem} style={styles.imagem}/>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
        <Text style={styles.texto}>{descricao}</Text>
    </View>
}

const styles = StyleSheet.create({
    contanier:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    imagem:{
        width: 50,
        height: 50,
    },
    titulo:{
        fontSize: 16,
        fontWeight: '600',
        marginStart: 12,
    },
    texto:{
        marginVertical: 18,
        justifyContent: 'center',
        marginEnd: 16,
    }
})