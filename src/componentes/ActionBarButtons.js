import React from "react";
import { FontAwesome } from '@expo/vector-icons'
import { View } from "react-native";


export default function BotoesDeAcao({navigation}) {
    return <>
        <View style={{ flexDirection: 'row' }}>
            <FontAwesome style={{ marginRight: 16 }} size={24} name="sign-out" onPress={() => {
                navigation.goBack()
            }}></FontAwesome>
        </View>

    </>
}