import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Mapa from '../telas/Mapa'



const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MapaScreen" options={{headerShown:false}} component={Mapa} />
          </Stack.Navigator>
      );
  }
