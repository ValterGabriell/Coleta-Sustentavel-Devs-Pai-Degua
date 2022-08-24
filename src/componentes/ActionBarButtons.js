import React from "react";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function BotoesDeAcao({ navigation }) {
    return <>
        <View style={{ flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 16 }} name='checkmark' size={32} color='green' onPress={() => {
                navigation.navigate("Login")
            }} />
          
        </View>

    </>
}