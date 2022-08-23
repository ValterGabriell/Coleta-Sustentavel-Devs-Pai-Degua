import React from "react";
import { FontAwesome } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from "react-native";


export default function ActionBarProfile({navigation}) {
    return <>
        <View style={{ flexDirection: 'row' }}>
        <Ionicons style={{ marginRight: 16 }} name='trophy' size={32} color='gray' onPress={() => {
                navigation.navigate("RankingScreen")
            }} />
        </View>

    </>
}