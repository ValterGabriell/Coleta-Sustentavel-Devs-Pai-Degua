import React,{useState} from "react";
import { FontAwesome } from '@expo/vector-icons'
import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native";



export default function CampoComentario() {

    const [comentário, setComentario] = useState("")

    return <>
        <View style={{ flexDirection: "row" }}>
            <TextInput
                placeholder="Insira um comentário!"
                style={styles.input}
                onChangeText={setComentario}
                value={comentário}
            />
            <FontAwesome name="paper-plane-o"></FontAwesome>
        </View>

    </>
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})
