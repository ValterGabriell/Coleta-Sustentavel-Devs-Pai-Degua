import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from "react-native";


export default function ActionBarProfile({navigation, icon, color, screen}) {
    return <>
        <View style={{ flexDirection: 'row' }}>
        <Ionicons style={{ marginRight: 16 }} name={icon} size={32} color={color} onPress={() => {
                navigation.navigate({screen})
            }} />
        </View>

    </>
}