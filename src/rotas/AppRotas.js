import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Feed from '../telas/Feed';
import Profile from '../telas/Profile';


const Tab = createBottomTabNavigator()

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={({route})=>
        ({
            headerShown:false,
            tabBarActiveTintColor:'#2a9f85',
            tabBarInactiveTintColor:'#C7C7C7'
       
            })} >
        <Tab.Screen name='Home' component={Feed} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
</NavigationContainer>

}