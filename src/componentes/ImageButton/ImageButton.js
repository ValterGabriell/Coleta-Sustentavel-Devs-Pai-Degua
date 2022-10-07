import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//Refatorar


const ImageButton = ({onPress}) => {
    return (
        <View style={styles.contanier}>
            <TouchableOpacity  style={{padding: 10, marginTop: 5}} onPress={onPress}>
                <AntDesign name="google" size={36} color="#717171" />
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 10}} onPress={onPress}>
                <AntDesign name="apple1" size={36} color="#717171" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contanier:{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ImageButton;