import React, { useState, useEffect }  from "react";
import { getUsersOrgs } from "../../../services/requisicoes/apiDevs/usersCatador";
import { getUsers } from "../../../services/requisicoes/apiDevs/users";
import profile from '../../../../assets/profile.png'
import { Text, FlatList, TouchableOpacity, Image, StyleSheet,View } from "react-native";

export default function ListOrgs() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const result = await getUsersOrgs()
            setUsers(result)
            console.log(result);
        })()

    }, [])
    return <>
        <FlatList
            data={users}
            style={styles.lista}
            keyExtractor={item => item.id}
            renderItem={({ item, index, separators }) => (

                <TouchableOpacity style={styles.container}>
                    <Image source={profile} style={styles.photo} />
                    <View style={styles.itemInfo}>
                        <Text style={styles.itemP1}>{item.instituicao}</Text>
                        <Text style={styles.subtitulo}>{item.email}</Text>
                    </View>
                </TouchableOpacity>
            )}
            ListEmptyComponent={
                <Text>Nenhum contato salvo!</Text>
            }
        />


    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#0078AA",
        paddingTop: 10
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },

    itemInfo: {
        marginLeft: 20,
    },

    itemP1: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
        fontWeight: '600',
    },

    subtitulo: {
        color: '#717171'
    }
})