import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View,Text } from "react-native";
import React from "react";
import Profile from '../telas/Profile'

function TestHome(){
    return <View>
        <Text>asdasd</Text>
    </View>
}

const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="TestHome" component={TestHome} />
          </Stack.Navigator>
      );
  }
