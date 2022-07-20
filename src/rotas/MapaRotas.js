import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Mapa from '../telas/Mapa'


const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="MapaScreen" component={Mapa} />
          </Stack.Navigator>
      );
  }
