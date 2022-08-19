import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.contanier} type={type}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contanier:{
        backgroundColor: "#2E7D32",
        width: 150,
        padding: 15,
        marginVertical: 10,
        borderRadius: 16,
        alignItems: "center",
    },
    text:{
        fontWeight: "bold",
        color: 'white',
    }
});

export default CustomButton;