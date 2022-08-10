import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Profile from '../telas/Profile'


const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" options={{headerShown:false}} component={Profile} />
          </Stack.Navigator>
      );
  }
