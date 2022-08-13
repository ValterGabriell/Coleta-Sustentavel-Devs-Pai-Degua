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
            <FontAwesome style={styles.iconSendComment} size={25} name="paper-plane-o" onPress={()=>{alert('msg enviada')}}></FontAwesome>
        </View>

    </>
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width:'80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    iconSendComment:{
        marginTop:18
    }
})
