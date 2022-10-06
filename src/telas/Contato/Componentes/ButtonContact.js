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