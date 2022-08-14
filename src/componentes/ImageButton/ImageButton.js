import React from 'react';
import {View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import iconGoogle from '../../../assets/iconGoogle.png';
import iconApple from '../../../assets/iconApple.png';

const ImageButton = ({onPress}) => {
    return (
        <View style={styles.contanier}>
            <TouchableOpacity  style={{padding: 10, marginTop: 5}} onPress={onPress}>
                <Image source={iconGoogle} style={styles.icone}/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 10}} onPress={onPress}>
                <Image source={iconApple} style={styles.icone}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contanier:{
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icone:{
        width: 56,
    },
})

export default ImageButton;