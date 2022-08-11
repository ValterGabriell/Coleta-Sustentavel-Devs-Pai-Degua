import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Button, StyleSheet } from "react-native";

export function GaleriaScreen(props) {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            props.navigation.navigate("FormularioScreen",{
                uri:result.uri
            })
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Button title="Selecione uma foto da galeria" onPress={pickImage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    buttom: {
        borderRadius: 10,
        height: 50,
        marginLeft: 35,
        marginRight: 35,
        size: 45
    },
    switchSide: {
        fontSize: 20, marginBottom: 13, color: "FFF"
    },
    modalViewMain: {
        flex: 1, justifyContent: "flex-end", alignItems: "center"
    },
    modalView: {
        marginTop: 520, flexDirection: 'row', alignSelf: 'center'
    },
    imgModal: {
        width: 200, height: 200 
    }
})