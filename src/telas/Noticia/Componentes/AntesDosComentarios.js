import React from "react";
import { Chip } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'
import { Image, Text, StyleSheet } from "react-native";
import { View } from "react-native";
import imgMapa from '../../../assets/imgMapa.jpg'


export default function AntesDosComentarios() {
    return <>
        <View style={{ flexDirection: "row" }}>
            <Chip style={styles.chip}
                icon="information"
                mode="outlined"
                selectedColor="black"
                onPress={() => alert('Information chip pressed')}>
                Gravidade
            </Chip>
            <Text>Status</Text>
            <FontAwesome name="check-square"></FontAwesome>
        </View>

    </>
}

const styles = StyleSheet.create({
    chip: {
        padding: 2,
        marginRight: 101,
        marginLeft:16
    }
})