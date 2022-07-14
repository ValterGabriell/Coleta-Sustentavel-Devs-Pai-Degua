import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Camera from '../telas/Feed/componentes/Camera'

const Stack = createNativeStackNavigator()
export default function FeedRotas(){
    return <Stack.Navigator>
    <Stack.Screen name="CameraScreen" component={Camera} />
</Stack.Navigator>
}