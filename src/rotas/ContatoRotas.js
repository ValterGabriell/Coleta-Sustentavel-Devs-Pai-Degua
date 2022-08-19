import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Contato from '../telas/Contato'


const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="ContatoScreen" options={{headerShown:false}} component={Contato} />
          
          </Stack.Navigator>
      );
  }
