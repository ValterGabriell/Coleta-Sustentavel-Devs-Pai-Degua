import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LinkRanking = ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={'onPress'} style={styles.contanier}>
            <MaterialCommunityIcons name="medal" size={24} color="#717171" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contanier:{
        
    }
})