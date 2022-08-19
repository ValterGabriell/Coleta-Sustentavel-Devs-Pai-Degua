import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={estilos.contanier}
            secureTextEntry={secureTextEntry}
        />

    );
};

const estilos = StyleSheet.create({
    contanier:{
        backgroundColor: "white",
        width: 320,
        height: 60,
        borderRadius: 16,
        marginVertical: 16,
        padding: 16,
        borderColor:"#2E7D32",
        borderWidth: 2,
        fontWeight: '500',
    },

});

export default CustomInput;