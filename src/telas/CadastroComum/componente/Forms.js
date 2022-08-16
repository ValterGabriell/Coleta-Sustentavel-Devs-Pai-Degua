import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";


export default function Forms() {
    const [comentário, setComentario] = useState("")

    return <>
        <SafeAreaView>
            <View>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    onChangeText={setComentario}
                    value={comentário}
                />

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={setComentario}
                    value={comentário}
                />

                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    onChangeText={setComentario}
                    value={comentário}
                />

                <TextInput
                    placeholder="Insira novamente sua senha"
                    style={styles.input}
                    onChangeText={setComentario}
                    value={comentário}
                />

            </View>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    iconSendComment: {
        marginTop: 18
    }
})
