import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfilePhoto from '../../../assets/profilePhoto.png'
import { FontAwesome } from '@expo/vector-icons'

export default function Topo({ props }) {

    return <>
        <SafeAreaView>
            <View >
                <Text style={styles.txtOne}>Selecione um tipo de</Text>
                <Text style={styles.txtTwo}>Usuário:</Text>
            </View>


            <TouchableOpacity onPress={() => {
                props.navigation.navigate('CadastroComum')
            }}>
                <View style={styles.containerMiddle} onPress={() => {

                }}>
                    <Image style={styles.img} source={ProfilePhoto} />
                    <Text style={styles.txtComumUser}>Usuário comum</Text>
                </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
                props.navigation.navigate('CadastroOrgao')
            }}>
                <View style={styles.containerMiddle}>
                <FontAwesome style={styles.icon} size={24} name="users"></FontAwesome>
                <Text style={styles.txtComumOrgs}>Orgãos públicos ou não governamentais</Text>
            </View>


        </TouchableOpacity>


    </SafeAreaView>
    </>
}


const styles = StyleSheet.create({
    txtOne: {
        fontSize: 24,
        marginLeft: 16,
        marginTop: 32
    },
    txtTwo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 16
    },
    img: {
        width: 128, height: 128, borderRadius: 64, marginTop: 48
    },
    containerMiddle: {
        alignSelf: 'center',
        marginBottom: 96
    },
    txtComumUser: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 4
    },
    icon: {
        alignSelf: 'center'
    },
    txtComumOrgs: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 12,
        marginTop: 4
    }
})