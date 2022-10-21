import React, {useState, useEffect}from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import CheckBox  from "react-native-paper";



const CheckBoxPage = () => {

    //residuos
    const optionMultiple = [
        {text: 'Metal', id: 1},
        {text: 'Orgânico', id: 2},
        {text: 'Papel', id: 3},
        {text: 'Plastico', id: 4},
        {text: 'Vidro', id: 5},
    ];


    return(
        <SafeAreaView>
            <CheckBox options={optionMultiple} onChange={op => alert(op)}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier:{
        flexDirection: 'row',
        alignContent: 'center',
    },
    btn:{
        marginHorizontal: 8,
    }
})