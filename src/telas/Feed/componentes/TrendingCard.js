import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const { width } = Dimensions.get('window')

//                    

export default function TrendingCard ({id, title, url}){

    return(
        <View style={styles.contanier}>
            <TouchableOpacity>
                <ImageBackground source={url} style={styles.imagem}>
                    <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']} style={styles.overlay}>
                        <Text style={styles.titulo}>{title}</Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>   
    )
}




const styles = StyleSheet.create({
    contanier:{
        borderRadius: 15,
        height: width / 2.6,
        width:width * 0.8,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    imagem:{
        height: width / 2.4,
        width:width * 0.8,
        borderRadius: 15,
    },
    overlay:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    titulo:{
        color: 'white',
        fontSize: 16,
        marginBottom: 14,
        marginStart: 10,
        fontWeight: '500'
    }
})