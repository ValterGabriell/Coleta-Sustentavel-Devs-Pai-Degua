import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Profile from '../telas/Profile'
import Login from '../telas/Login'


const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" options={{headerShown:false}} component={Profile} />
            <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={Login} />
          </Stack.Navigator>
      );
  }
