import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function ButtonContact(){
    //{telefone, email}
    return <View style={styles.botoes}>
        <TouchableOpacity>
            <Feather name="phone" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name="message-outline" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome name="whatsapp" size={40} color="black" style={styles.item}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    contanier:{
        alignItems: 'center',
    },
    botoes:{
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "center",
        marginStart: 85,
    },
    item:{
        width: 100,
        height: 100

    }
})