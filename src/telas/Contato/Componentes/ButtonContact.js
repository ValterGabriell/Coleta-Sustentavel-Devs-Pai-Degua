import React from 'react';
import { TouchableOpacity, View, StyleSheet, Linking, Alert } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function ButtonContact(){

    const phone = '+5591991658323'
    const email = 'becca@gmail.com'
    const mensagem = 'Olá, fulano! Estou precisando de um catador, vamos conversar?'
    const contact = +559199941684

    const openUrl = async(url) =>{
        const isSupported = await Linking.canOpenURL(url);
        if(isSupported){
            await Linking.openURL(url);
        }else{
            Alert.alert('Sinto muito! Não encontramos a informação em nossos dados')
        }
    }


    //{telefone, email}
    return <View style={styles.botoes}>
        <TouchableOpacity onPress={() => openUrl(`tel: ${phone}`)}>
            <Feather name="phone" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openUrl(`mailto: ${email}`)}>
            <MaterialCommunityIcons name="message-outline" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openUrl(`whatsapp://send?phone=${contact}&text=${mensagem}`)}>
            <FontAwesome name="whatsapp" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    botoes:{
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 55,
        marginTop: 40,
    },
    item:{
        width: 80,
        height: 100,
        marginHorizontal: 16,
    }
})